const http = require('http')

const server = http.createServer((req, res) => {
    console.log("服务器被访问")
    const url = req.url
    const method = req.method
    if (url == "/login") {
        if (method == "POST") {
            res.end("登陆成功")
        } else {
            res.end("抱歉，现在不支持出post请求外其它请求方式的登陆")
        }
    } else if (url == "/register") {
        res.end("注册成功")
    } else if (url == "/logout") {
        res.end("退出登陆成功")
    } else {
        res.end("hello")
    }
})

server.listen(8000, () => {
    console.log("服务器开启成功")
})