const Koa = require('koa')

const app = new Koa();

app.use((ctx, next) => {
    if (ctx.path === '/users') {
        if (ctx.method === 'GET') {
            ctx.body = 'user data list'
        } else if (ctx.method === 'POST') {
            ctx.body = 'create user success'
        }
    } else if (ctx.path === '/home') {
        ctx.body = 'home data list~'
    } else if (ctx.path === 'login') {
        ctx.body = '登陆成功，欢迎回来~'
    }
})

app.listen(6000, () => {
    console.log("koa服务器开启成功~")
})