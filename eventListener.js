const http = require('http')
const server = http.createServer()

server.on('request', function(req, res) {
    console.log('request event')

    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('hello world \n')
})

server.on('connection', function(req, res) {
    console.log('client connected')
})

server.listen(8124, function() {
    console.log('listening event')
})

console.log('server running on 8124 port')