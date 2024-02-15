ogr2ogr -update -append -s_srs EPSG:4326 -t_srs EPSG:3763 -append -f PostgreSQL PG:"dbname='evoradata' host='192.168.1.254' port='5432' user='evoradata' password='evoradata' active_schema='evoradata'" -nln lines_osm evora_data.gpkg "lines osm"




