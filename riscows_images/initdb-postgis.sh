#!/bin/sh

set -e

# Perform all actions as $POSTGRES_USER
export PGUSER="$POSTGRES_USER"

# Create users and work db
"${psql[@]}" <<- 'EOSQL'
CREATE USER gisdata WITH PASSWORD 'gisdata';
CREATE USER risco_v2 WITH PASSWORD 'risco_v2';
CREATE DATABASE gisdata;
GRANT ALL PRIVILEGES ON DATABASE gisdata TO gisdata;
GRANT TEMPORARY, CONNECT ON DATABASE gisdata TO risco_v2;
EOSQL

# Load PostGIS into both template_database and $POSTGRES_DB
# for DB in gisdata "$POSTGRES_DB"; do
# 	echo "Loading extensions into $DB"
# 	"${psql[@]}" --dbname="$DB" <<-'EOSQL'
# 		CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
# 		CREATE EXTENSION IF NOT EXISTS postgis;
# EOSQL

echo "Loading extensions into 'gisdata'"
"${psql[@]}" --dbname="gisdata" <<-'EOSQL'
	CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
	CREATE EXTENSION IF NOT EXISTS postgis;
EOSQL

# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname gisdata --file /docker-entrypoint-initdb.d/risco_pg_deployment.sqlscript

