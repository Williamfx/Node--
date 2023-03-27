const http = require('http')


const server = http.createServer((req, res) => {
    // req.setEncoding('utf-8')
    console.log(req.headers)
    console.log(req.headers['content-type'])
    console.log(req.headers['authorization'])

    res.end("查看header的信息")
})

server.listen(8000, () => {
    console.log("服务器开启成功")
})