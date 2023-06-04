const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    // 请求对象
    console.log(ctx.request) //请求对象：Koa封装的请求对象
    console.log(ctx.req) //请求对象：Node封装的请求对象

    // 响应对象
    console.log(ctx.response) //请求对象：Koa封装的响应对象
    console.log(ctx.res) //请求对象：Node封装的响应对象

    // 其它属性
    console.log(ctx.query)
})

app.listen(6000, (req, res, next) => {
    console.log("启动服务器成功~")
})