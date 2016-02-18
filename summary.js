/**
 * 
 */
const https = require('https');

const CommonOptions = {
  host: 'api.lendingclub.com',
  port: 443,
  headers: {
    "Accept": "application/json"
  }
};

const version = 'v1';
options = CommonOptions;
options.headers['Authorization'] = "";
options.headers['Content-Type'] = 'application/json';
options.path = "/api/investor/" + version + "/loans/listing";
//options.headers['Content-Length'] = post_data.length;
console.log(options);
if ( 4 > 3){
var api_req = https.get( options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  res.setEncoding('utf8');
  var response = '';
  res.on('data', function(chunk){
    response += chunk;
  });
  res.on('end', function(){
    console.log(response);
  });
  res.on('error', function(e){
    console.error(e);
  });
});
};