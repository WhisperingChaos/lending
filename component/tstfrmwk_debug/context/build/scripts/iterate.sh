###############################################################################
##
##  Purpose:
##    Execute one or more nodejs tests that rely on the testing framework.
##
##  Inputs:
##    $1 - A template of a command that executes each test.  The template
##         includes a variable named "jsSelected" which represents and will 
##         be replaced by the nodejs module to be executed.
##   TEST_DIR - A mandatory environment variable identifying the directory
##         containing one or more nodejs scripts that rely on the testing
##         framework.
##   TEST_SELECTOR - An optional environment variable containing a linux
##         file pattern describing 
## 
###############################################################################
main()
{
  local exeThis="$1"
  if [ -n "${TEST_SELECTOR}" ]; then TEST_SELECTOR='*.js'; fi
  local jsSelected
  local rtnCode='0'
  for jsSelected in $( ls -1 ${TEST_DIR}/${TEST_SELECTOR} )
  do
    if ! eval ${exeThis}; then rtnCode='1'; fi
  done
  return $rtnCode
}
main "$1"
