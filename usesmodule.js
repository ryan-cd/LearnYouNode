var readdirmodule = require('./readdirmodule');

readdirmodule(process.argv[2], process.argv[3], function(err, data)
{
  if(err)
    throw err;
  for(i in data)
    console.log(data[i]);
});
