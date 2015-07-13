var net = require('net')

function getFormattedDate() {
  var date = new Date()
  var returnValue = ''

  returnValue += date.getFullYear() + '-'
  returnValue += (date.getMonth()+1) > 9 ? (date.getMonth()+1) : '0' + (date.getMonth()+1)
  returnValue += '-'
  returnValue += (date.getDate()) > 9 ? (date.getDate()) : '0' + (date.getDate())
  returnValue += ' '
  returnValue += (date.getHours()) > 9 ? (date.getHours()) : '0' + (date.getHours())
  returnValue += ':'
  returnValue += (date.getMinutes()) > 9 ? (date.getMinutes()) : '0' + (date.getMinutes())
  returnValue += '\n'
  return returnValue
}

var server = net.createServer(function (socket) {
  socket.write(getFormattedDate())
  socket.end()
})
server.listen(process.argv[2])
