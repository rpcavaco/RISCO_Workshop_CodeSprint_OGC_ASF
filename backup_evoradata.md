
# Backup da BD 'evoradata'

## Numa janela 'terminal'

1. Abrir terminal
2. fazer 'sudo su'
3. fazer

		cd /mnt/Dados/ContainerStorage/dpage_pgadmin4/lib/pgadmin/storage/rpcavaco_gmail.com

4. verificar que existe o ficheiro 'backup_evoradata.sh' tem permissões de execução para o respetivo grupo (*root*).

## No Cockpit (http://localhost:9090)

Vamos executar comandos DENTRO do container.

1. Expandir a 'entrada' do container 'pgadmin4' e abrir a consola
2. fazer

		cd /var/lib/pgadmin/storage/rpcavaco_gmail.com/

3. executar ./backup_evoradata (pwd: 'postgres')

O ficheiro contém o seguinte comando:

		/usr/local/pgsql-12/pg_dump -h 192.168.1.254 -U postgres -t 'evoradata.v*' -t evoradata.dgpc_arqueologia -f evoradata_data.sql evoradata

## Na janela 'terminal', de novo

1. copiar o ficheiro evoradata_data.sql 

		cp evoradata_data.sql /mnt/Dados/Associacoes/RISCO_Workshop_CodeSprint_OGC_ASF/dados/

2. remover o ownership 'root' do ficheiro evoradata_data.sql, abrindo uma nova janela de terminal e fazendo ...

		cd /mnt/Dados/Associacoes/RISCO_Workshop_CodeSprint_OGC_ASF/dados		

		sudo chown rpcavaco:rpcavaco evoradata_data.sql

3. Substituir o cabeçalho do dump 

		--
		-- PostgreSQL database dump
		--

		-- Dumped from database version 12.3 (Debian 12.3-1.pgdg100+1)
		-- Dumped by pg_dump version 12.17

		SET statement_timeout = 0;
		SET lock_timeout = 0;
		SET idle_in_transaction_session_timeout = 0;
		SET client_encoding = 'UTF8';
		SET standard_conforming_strings = on;
		SELECT pg_catalog.set_config('search_path', '', false);
		SET check_function_bodies = false;
		SET xmloption = content;
		SET client_min_messages = warning;
		SET row_security = off;

		SET default_tablespace = '';

		SET default_table_access_method = heap;


	por apenas a seguinte linha:

		\connect evoradata

		
