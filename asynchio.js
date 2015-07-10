var fs = require('fs');

function cb (err, data)
{
  if(err)
    throw err;

  console.log(data.split('\n').length - 1);
}

var bufferString = fs.readFile(process.argv[2], 'utf8', cb);
