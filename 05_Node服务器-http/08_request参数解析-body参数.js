const http = require('http')


const server = http.createServer((req, res) => {
    // console.log("服务器被访问")
    req.setEncoding('utf-8')

    // request对象本质上是一个readable可读流
    let isLogin = false
    req.on('data', (data) => {
        const dataString = data
        const loginInfo = JSON.parse(dataString)
        if (loginInfo.name === 'coderwhy' && loginInfo.password === '123456') {
            isLogin = true;
        } else {
            isLogin = false;
        }
    })

    req.on('end', () => {
        if (isLogin) {
            res.end('登陆成功')
        } else {
            res.end('登陆失败，用户名或密码错误')
        }
    })
})

server.listen(8000, () => {
    console.log("服务器开启成功")
})