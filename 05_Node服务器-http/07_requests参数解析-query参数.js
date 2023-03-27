const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    console.log("服务器被访问")
    const urlString = req.url //获取一整串除了主域后面的url
    const urlInfo = url.parse(urlString) //获取url的各个参数
    const querySting = urlInfo.query //获取url的query参数
    const queryInfo = qs.parse(querySting) //将query参数转换为对象形式
    console.log(urlInfo)
    console.log(queryInfo)
    console.log(queryInfo.offset, queryInfo.size)
    res.end("hello")
})

server.listen(8000, () => {
    console.log("服务器开启成功")
})