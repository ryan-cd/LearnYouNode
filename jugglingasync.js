var http = require('http');
var async = require('async');

function getData(item, cb){
  http.get(item, function(response){
    result = "";
    response.setEncoding('utf8');

    response.on("data", function(data){
      result += data;
    });

    response.on("end", function(){
      //resultList.push(result);
      cb(null, result);
    });
  });
}

async.map([process.argv[2], process.argv[3], process.argv[4]], getData, function(err, results){
  if(err)
    console.error(err);

  for (i in results)
    console.log(results[i]);
});
