const http = require('http')

const hostName = '127.0.0.1'
const port = '8080'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type','text/plain')
    res.end('hello world!\n')
})
server.on('clientError', (err,socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})
server.listen(port,hostName,(res)=>{
    console.log(`服务器运行在 http://${hostName}:${port}/`)
})