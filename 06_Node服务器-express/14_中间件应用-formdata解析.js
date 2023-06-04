const { urlencoded } = require('express')
const express = require('express')
const multer = require('multer')

// 创建app对象
const app = new express()

// express内置的插件，无法解析formdata
// app.use(express.json())
// app.use(urlencoded({ extended: true }))

// 应用一个express编写第三方的中间件
const formdata = multer()

// 编写中间件
app.post('/user', formdata.any(), (req, res, next) => {
    console.log(req.body)
    res.end("文件上传成功~")
})

// 启动服务器
app.listen(9000, () => {
    console.log('express服务器启动成功~')
})