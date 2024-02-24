\connect evoradata

CREATE SCHEMA evoradata
    AUTHORIZATION evoradata;

GRANT TEMPORARY, CONNECT ON DATABASE evoradata TO PUBLIC;    

GRANT USAGE ON SCHEMA evoradata TO risco_v2;  