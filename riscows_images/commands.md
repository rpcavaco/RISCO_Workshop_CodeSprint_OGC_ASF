# RISCO Workshop setup

**Commands for Docker setup and management**

You must have a usable Docker installation, offering 'docker-compose' (or 'docker compose') command.

(On RHEL derivatives, docker and docker-compose are different setups)

Suggestion: use VS Code, with Docker extension, to manage this setup.

# Build

To first get docker images and create needed containers, you must:

1. Open a terminal window
2. Choose a working folder (with 'cd'), in case you need to save or retrieve files
3. type 'docker-compose':

		docker-compose --project-name risco_workshop -f compose.yaml up 

4. Confirm success using Adminer, open a browser window and type in address bar:

		http://localhost:8080

5. When fnished, stop Adminer by clicking ^C (command line prompt comes back)
6. To stop everithing, type:

		docker-compose --project-name risco_workshop stop

7. To restart, next time, just type:

		docker-compose --project-name risco_workshop start

	To stop again, just repeat 6.

8. To clean up, you can type:

		docker-compose down --volumes

	Options '--volumes' removes 'risco_workshop_pg_data', keeping still an anonymous volume. 

	For a complete cleanup, check docker docs for cleaning up images and volumes.

--- Compose frontend


----------------------------------

-- Containers avulsos

- Risco server
- 
docker build -t teste -f Dockerfile_riscosrv .
docker run --net=host -it --rm teste


-- Caddy

$ docker run -it --rm --net=host -p 9200:9200 -v caddy_data:/data -v caddy_config:/config -v $PWD/caddy/caddy.json:/srv/caddy.json --mount type=bind,source=$PWD/caddylog,target=/var/log caddy caddy run --config caddy.json


docker run -it --rm --net=host -v caddy_data:/data -v caddy_config:/config -v $PWD/caddy_cfg/caddy.json:/srv/caddy.json caddy caddy run --config caddy.json


-- DEv


		docker-compose --project-name risco_workshop -f compose.yaml -f compose.dev.yaml up 