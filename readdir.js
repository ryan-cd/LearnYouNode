var fs = require('fs');
var path = require('path');

function cb (err, list)
{
  if(err)
    throw err;

  for(i in list)
  {
    if(path.extname(list[i]).substring(1, list[i].length-1) === process.argv[3])
      console.log(list[i]);
  }
}

fs.readdir(process.argv[2], cb);
