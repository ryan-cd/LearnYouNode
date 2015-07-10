var fs = require('fs');
var path = require('path');

module.exports = function(dir, filter, cb)
{
  fs.readdir(dir, function(err, list)
  {
    if(err)
      return cb(err);

    var filteredList = [];
    for (i in list)
    {
      if(path.extname(list[i]) === '.'+filter)
        filteredList.push(list[i]);
    }
    return cb(null, filteredList);
  });
}
