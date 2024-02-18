
LOG_CFG = {
	# "format" : "%(asctime)s %(levelname)-8s %(name)s %(message)s",
	"format" : "%(asctime)s %(levelname)-8s %(message)s",
	"filename": "../log/webapp.log",
	"level": None
}


DECODE_FORMAT = "latin-1"


SELECT_EXISTING_SESSION = """select t.login,
 exists ( 
	select 1
	from {0} a
	where login = t.login
) existe, d.can_edit,
b.session_id, now() - b.ts < interval '{2} hour' stillvalid, b.ts
from ( VALUES ('{3}')) t(login)
left join {0} d
using (login)
left join (
	select *
	from (
		select login, session_id,
		row_number() over (partition by login order by ts desc) rn,
		ts
		from {1} 
	) c
	where rn = 1
) b
using (login)"""

CREATE_SESSION = "insert into {0} (login) values ($1)"