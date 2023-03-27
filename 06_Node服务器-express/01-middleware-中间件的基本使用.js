const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('normal middleware 01')
    next()
})

app.use((req, res, next) => {
    console.log('normal middleware 02')
    next()
})


app.listen(9000, () => {
    console.log('express服务器启动成功')
})