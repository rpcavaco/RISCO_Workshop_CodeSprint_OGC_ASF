mkdir cont_shared_folders;
pushd cont_shared_folders;

mkdir riscosrv;
pushd riscosrv;

mkdir log;
pushd log;

touch log.txt;

popd;
popd;
mkdir webapp;

cp -r /mnt/Dados/Associacoes/RISCO_Workshop_CodeSprint_OGC_ASF/riscows_images/riscowebapp_src/webapp/static ./webapp

mkdir log