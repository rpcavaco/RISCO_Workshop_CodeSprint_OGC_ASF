

import logging 

from contextlib import asynccontextmanager

from os import scandir
from os.path import exists, splitext, dirname, abspath, join as path_join
from logging.handlers import RotatingFileHandler
from re import split as re_split
from datetime import datetime

from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from dbase import DBPool #, sql_build_sel

from common import LOG_CFG, DECODE_FORMAT, SELECT_EXISTING_SESSION, CREATE_SESSION

LOG_CFG["level"] = logging.INFO

def log_setup():
	
	logger = logging.getLogger('main')
	logger.setLevel(LOG_CFG["level"])
	logfmt = logging.Formatter(LOG_CFG["format"])
	fname = LOG_CFG["filename"]
	full_path = path_join(dirname(abspath(__file__)), fname)
	fh = RotatingFileHandler(full_path, maxBytes=2097152, backupCount=10, encoding='utf-8')
	fh.setFormatter(logfmt)
	logger.addHandler(fh)

dbpools = {}
gen_cfg = {}

# !! WARNING !!: 'configs' folder, containing config files, must exist up one level

# Include here path where authentication must be performed.
# Authentication depends on given REMOTE-USER header content, thus relying on a third party authentication appliance or on the integration with a authentication-capable reverse proxy (e.g.: Apache HTTP Server with Windows Active Directory integration enabled, etc.) 

AUTHENTICATED_PATHS = ['/']

@asynccontextmanager
async def lifespan(app: FastAPI):

	log_setup()	

	logger = logging.getLogger('main')
	logger.info("starting up")

	try:

		found = False

		parent_folder = dirname(dirname(abspath(__file__)))

		cfg_folder = path_join(parent_folder, 'configs')
		gen_cfg_path = path_join(cfg_folder, 'config.json')

		if exists(gen_cfg_path):
			with open(gen_cfg_path) as cfgfl:
				import json
				gen_cfg.update(json.load(cfgfl))
		else:
			raise RuntimeError(f"general config not found: {gen_cfg_path}")
		
		for entry in scandir(cfg_folder):
			if entry.is_file():
				lname = entry.name.lower()
				bn = splitext(lname)[0]
				if lname.startswith("dbconn") and lname.endswith(".json"):
					name_splits = bn.split("_")
					assert len(name_splits) == 2, f"Config file '{lname}' for DB connection must have a single '_': {len(name_splits)-1}"
					connkey = name_splits[1]
					dbpools[connkey] = DBPool(entry.path)
					await dbpools[connkey].openup()
					found = True

		if not found:
			raise RuntimeError("no DB config file found")
		else:
			logger.info(f"db keys: {dbpools.keys()}")
			
	except:
		logger.exception("Error on opening DB")


	yield 

	logger.info("shutting down")

	for dbpool in dbpools.values():
		await dbpool.teardown()	


def create_app():

	fapp = FastAPI(lifespan=lifespan)
	templates = Jinja2Templates(directory='static')

	# Middleware a aplicar a todos os requests
	@fapp.middleware("http")
	async def case_sens_middleware(request: Request, call_next):

		logger = logging.getLogger('main')
		raw_query_str = request.scope["query_string"].decode(DECODE_FORMAT)

		if len(raw_query_str) > 0:

			new_qs_buffer = []
			splits1 = raw_query_str.split("&")
			for sp1 in splits1:
				splits2 = sp1.split("=")
				try:
					new_qs_buffer.append("{0}={1}".format(splits2[0].lower(), splits2[1]))
				except:
					logger.debug("raw_query_str:{} splits1:{} splits2:{}".format(raw_query_str, splits1, splits2))
					raise	

			new_query_str = "&".join(new_qs_buffer)	
			request.scope["query_string"] = new_query_str.encode(DECODE_FORMAT)

		response = await call_next(request)
		return response 

	@fapp.middleware("http")
	async def auth_session_middleware(request: Request, call_next):

		logger = logging.getLogger('main')

		if request.scope['path'] in AUTHENTICATED_PATHS:

			logger.info(f"trying to authenticate on path: '{request.scope['path']}'")

			if not hasattr(request.state, 'authobj'):
				request.state.authobj = None

			if "remote-user" in request.headers.keys():		

				remote_user = request.headers["remote-user"]
				splits = re_split(r"[\\]+", remote_user)
				
				assert len(splits) == 2, f"remote-user error,  plits:{splits}"
					
				domain = splits[0]
				user = splits[1]

			else:
					
				domain = "NONE"
				user = gen_cfg["auth"]["default_user"]

				assert user.lower() != "null"

			# assert domain == DOMAIN
				
			if domain != "NONE":
				assert domain == gen_cfg["auth"]["domain"]

			users_t = f"{gen_cfg['auth']['cfgschema']}.{gen_cfg['auth']['userstable']}"
			users_session_t = f"{gen_cfg['auth']['cfgschema']}.{gen_cfg['auth']['sessionstable']}"
		
			sqlstr = SELECT_EXISTING_SESSION.format(users_t, users_session_t, gen_cfg["auth"]["sessionlimit_minutes"], user)

			result = None
			async with request.state.dbobjs[request.state.db_active_key].acquire() as conn:

				async with conn.transaction():
				
					result = await conn.fetchrow(sqlstr)

					if not result is None:

						if result['existe']:

							if result['stillvalid']:

								if result['can_edit']:
									role = 'CANEDIT'
								else:
									role = 'READONLY'

							else:

								sqlstr = CREATE_SESSION.format(users_session_t)
								logger.info(f"create session sqlstr: {sqlstr}")

								await conn.execute(sqlstr, user)

								sqlstr = SELECT_EXISTING_SESSION.format(users_t, users_session_t, gen_cfg["auth"]["sessionlimit_minutes"], user)
								result = await conn.fetchrow(sqlstr)

							if result['stillvalid']:

								if result['can_edit']:
									role = 'CANEDIT'
								else:
									role = 'READONLY'

								request.state.authobj = {
									"domain": domain,
									"user": user,
									"role": role,
									"session": result['session_id'],
									"ts": result['ts']
								}

							else:

								raise RuntimeError("impossivel registar sessao")

		response = await call_next(request)
		return response

	@fapp.middleware("http")
	async def commonobjs_session_middleware(request: Request, call_next):

		assert len(dbpools.keys()) > 0, "commonobjs_session_middleware, no DB connections configured"
		logger = logging.getLogger('main')

		request.state.db_active_key = "NONE"
		request.state.dbobjs = {}
		# failed = False
		for ckey in dbpools.keys():
			test = await dbpools[ckey].test()
			if test:
				request.state.dbobjs[ckey] = dbpools[ckey].pool
				if request.state.db_active_key == "NONE":
					request.state.db_active_key = ckey;
			else:
				try:
					await dbpools[ckey].openup()
					request.state.dbobjs[ckey] = dbpools[ckey]
				except:
					# failed = True
					logger.exception(f"BD '{ckey}' unreachable")				

		response = await call_next(request)
		return response

	@fapp.get("/")
	async def homepage(request: Request, response_class=HTMLResponse):

		logger = logging.getLogger('main')
		logger.info("providing site entry page")

		user = "publico"
		pg = 'index_publico.html'
		session_id = "NONE"

		if hasattr(request.state, 'authobj') and not request.state.authobj is None:
			user = request.state.authobj["user"]
			session_id = request.state.authobj["session"]
			pg = 'index.html'

		return templates.TemplateResponse(pg, {"request":request, "user": user, "session_id": session_id})

	# @fapp.get("/favicon.ico")
	# async def favicon():
	# 	return FileResponse('static/media/xxxx.png')

	# fapp.mount("/css", StaticFiles(directory='static/css'), name='static_css')
	fapp.mount("/", StaticFiles(directory='static/'), name='root')
	fapp.mount("/js", StaticFiles(directory='static/js'), name='static_js')
	fapp.mount("/media", StaticFiles(directory='static/media'), name='static_media')
	fapp.mount("/fonts", StaticFiles(directory='static/fonts'), name='static_fonts')	

	return fapp
			
app = create_app()

