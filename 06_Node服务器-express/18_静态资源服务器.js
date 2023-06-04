const express = require('express')

const app = new express()

app.use(express.static('./uploads/'))

app.post('/users', (req, res, next) => {
    req.on("提交用户成功")
})

app.listen(9000, (req, res, next) => {
    console.log("服务器启动成功~")
})