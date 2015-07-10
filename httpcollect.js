var http = require('http');

http.get(process.argv[2], function(response){
  var results = "";
  response.setEncoding('utf8');
  response.on("data", function(data){
    results += data;
  });
  response.on("end", function(){
    console.log(results.length);
    console.log(results);
  });
});
