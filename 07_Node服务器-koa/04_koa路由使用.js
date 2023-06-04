const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
    ctx.body = 'user list data'
})

userRouter.get('/:id', (ctx, next) => {
    const id = ctx.params.id
    ctx.body = '获取某一个用户' + id
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
    console.log('Koa服务器开启成功~')
})