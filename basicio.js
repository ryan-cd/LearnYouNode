var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var bufferString = buffer.toString();

var bufferArray = bufferString.split("\n");

console.log(bufferArray.length - 1);

//note that if you pass 'utf8' as the second arg to readFileSync it will return a string
