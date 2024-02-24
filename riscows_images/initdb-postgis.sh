#!/bin/sh

set -e

# Perform all actions as $POSTGRES_USER
export PGUSER="$POSTGRES_USER"

# Create users and work db
"${psql[@]}" <<- 'EOSQL'
CREATE USER evoradata WITH PASSWORD 'evoradata';
CREATE USER risco_v2 WITH PASSWORD 'risco_v2';
CREATE DATABASE evoradata;
GRANT ALL PRIVILEGES ON DATABASE evoradata TO evoradata;
GRANT TEMPORARY, CONNECT ON DATABASE evoradata TO risco_v2;
EOSQL

# Load PostGIS into both template_database and $POSTGRES_DB
# for DB in evoradata "$POSTGRES_DB"; do
# 	echo "Loading extensions into $DB"
# 	"${psql[@]}" --dbname="$DB" <<-'EOSQL'
# 		CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
# 		CREATE EXTENSION IF NOT EXISTS postgis;
# EOSQL

echo "Loading extensions into 'evoradata'"
"${psql[@]}" --dbname="evoradata" <<-'EOSQL'
	CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
	CREATE EXTENSION IF NOT EXISTS postgis;
EOSQL

# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname evoradata --file /docker-entrypoint-initdb.d/risco_pg_deployment.sqlscript

