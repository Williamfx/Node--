const Koa = require('koa')

const app = new express()

//koa的中间件有两个参数ctx/next
app.use((ctx, next) => {
    console.log('匹配到koa的中间件')
    ctx.body = '哈哈哈哈哈'
})

app.listen(6000, () => {
    console.log("服务器启动成功~")
})