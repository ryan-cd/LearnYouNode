var http = require('http')
var url = require('url')

function createJSON (req) {
  var date = new Date(req.query.iso)

  try {
    if (req.pathname.substring(0, 13) === '/api/unixtime') {
      return JSON.stringify({
        unixtime: date.getTime()
      })
    }
    else if (req.pathname.substring(0, 14) === '/api/parsetime') {
      return JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      })
    }
  }
  catch (Exception) {
    return ''
  }
}

var server = http.createServer(function (req, res) {
  if(req.method !== 'GET') {
    res.end('Error: server only responds to get requests')
  }

  var result = createJSON(url.parse(req.url,true))
  if (result !== '') {
    res.writeHead(200, { 'Content-Type' : 'application/json' })
  }
  else {
    res.writeHead(404)
  }
  res.end(result)
})
server.listen(process.argv[2])
