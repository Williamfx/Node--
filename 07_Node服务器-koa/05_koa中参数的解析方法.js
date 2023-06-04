const Koa = require("koa")
const KoaRouter = require("@koa/router")

const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
    ctx.body = 'user list data'
})

userRouter.get('/:id', (ctx, next) => {
    const id = ctx.params.id
    ctx.body = '获取用户的id为：' + id
})

userRouter.post('/', (ctx, next) => {
    ctx.body = 'create list data'
})

userRouter.delete('/:id', (ctx, next) => {
    ctx.body = '删除用户' + id + '成功'
})

userRouter.patch('/', (ctx, next) => {
    ctx.body = 'patch a user data'
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(6000, () => {
    console.log("koa服务器开启成功")
})