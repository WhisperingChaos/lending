main()
{
  local exeThis='node "${TEST_DIR}/${jsSelected}"'
  if [ "${TEST_MODE}" == 'debug' ]; then
    # specify --web-hose 0.0.0.0 to allow connections from any host
    # interface (IP) address defined for the container, otherwise,
    # the default host address of local host prevents client browsers
    # from connecting to node-inspector server running on the host.
    exeThis='node\-debug \-\-web\-host \0\.\0\.\0\.\0 ${TEST_DIR}/${jsSelected}'
  fi 
  if [ -n "${TEST_SELECTOR}" ]; then TEST_SELECTOR='*.js'; fi
  local jsSelected
  for jsSelected in $( ls -1 ${TEST_DIR}/${TEST_SELECTOR} )
  do
    eval ${exeThis}
  done
}
main
