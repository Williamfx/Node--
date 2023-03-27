const http = require('http')

const server = http.createServer((req, res) => {
    console.log("服务器被访问")
    res.end('hello world aaa')
})

server.listen(8000, () => {
    console.log("服务器开启成功")
})