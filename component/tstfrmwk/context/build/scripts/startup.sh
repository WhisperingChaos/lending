#!/bin/sh
main()
{
  if [ "${TEST_MODE}" == 'inspect' ] || [ -z "$( ls -1 ${TEST_DIR}/${TEST_SELECTOR} )" ]; then 
    cd ${TEST_FRMWRK_DIR}
    yuidoc -o ${TEST_FRMWRK_DOC_DIR} --server 8181 -n . &
    sh
  else
    iterate.sh
  fi
}
main

