const http = require('http')

// 1、使用http模块发送get请求
// http.get('http://localhost:8000', (res) => {
//     // 从可读流中获取数据
//     res.setEncoding('utf-8')
//     res.on('data', (data) => {
//         // const dataString = data.toString()
//         // const dataInfo = JSON.parse(dataString)
//         // console.log(dataInfo)
//         console.log(data)
//     })
// })

const req = http.request({
    method: 'POST',
    hostname: 'localhost',
    port: 8000
}, (res) => {
    res.on('data', (data) => {
        console.log(data.toString())
    })
})
req.end()