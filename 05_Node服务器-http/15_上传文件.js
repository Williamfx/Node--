const http = require('http')

const server = http.createServer((req, res) => {
    // console.log("服务器被访问")
    req.setEncoding('binary')

    //客户端传递的数据是表单数据（请求体）
    req.on("data", (data) => {
        console.log(data);
    })
    req.on("end", () => {
        res.end("文件上传成功~")
    })
})

server.listen(8000, () => {
    console.log("服务器开启成功")
})