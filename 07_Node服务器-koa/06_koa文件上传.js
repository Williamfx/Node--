const Koa = require("koa")
const KoaRouter = require("@koa/router")
const multer = require('@koa/multer')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
    ctx.body = 'user list data'
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(6000, () => {
    console.log("koa服务器开启成功")
})

不知饥饱愿知秋

景愿：男主，23岁，

彦知秋：