const express = require('express')
    // const multer = require('multer')

const app = new express()

// const query = multer();

app.get('/home/list', (req, res, next) => {
    const queryInfo = req.query
    console.log(queryInfo)

    res.end('data list数据')
})

app.get('/user/:id', (req, res, next) => {
    const id = req.params.id
    res.end(`获取到${id}的数据`)
})

app.listen(9000, () => {
    console.log("服务器启动成功~")
})