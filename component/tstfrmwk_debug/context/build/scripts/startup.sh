#!/bin/sh
main()
{
  if [ "${TEST_MODE}" == 'inspect' ] || [ -z "$( ls -1 ${TEST_DIR}/${TEST_SELECTOR} )" ]; then 
    # Either 'inspect' test mode or no tests specified, in these situations
    # start the test framework documentation server and a command shell.
    cd ${TEST_FRMWRK_DIR}
    yuidoc -o ${TEST_FRMWRK_DOC_DIR} --server 8181 -n . &
    sh
    return 0
  fi
  # Assume simply running the test(s).
  local execThis='node "${TEST_DIR}/${jsSelected}"'
  if [ "${TEST_MODE}" == 'debug' ]; then
    # requested debugging of a test.
    # specify --web-hose 0.0.0.0 to allow connections from any host
    # interface (IP) address defined for the container, otherwise,
    # the default host address of local host prevents client browsers
    # from connecting to node-inspector server running on the host.
    execThis='node\-debug \-\-web\-host \0\.\0\.\0\.\0 ${TEST_DIR}/${jsSelected}'
  fi
  iterate.sh "${execThis}"
}
main








































