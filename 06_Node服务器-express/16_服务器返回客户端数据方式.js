const express = require('express')

const app = new express()

app.use('/user', (req, res, next) => {
    res.end("获取信息成功~")
})

app.post('/login', (req, res, next) => {
    //1.res.end方法(比较少用)
    // res.end("登陆成功~")

    //2.res.json方法（最多）
    // res.json({
    //     code: 0,
    //     message: '欢迎回来~',
    //     list: [
    //         { name: 'iPhone', price: 111 },
    //         { name: 'iPad', price: 111 },
    //         { name: 'iMac', price: 111 },
    //         { name: 'Mac', price: 111 },
    //     ]
    // })

    //3.res.status方法:设置http状态码
    res.status(201)
    res.json('创建用户成功~')
})

app.listen(9000, () => {
    console.log('服务器开启成功~')
})