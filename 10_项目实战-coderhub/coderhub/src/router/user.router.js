const KoaRouter = require('@koa/router')

//1.创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

//2.定义路由中映射
userRouter.post('/', (ctx, next) => {
    // 1.获取用户传递过来信息
    const user = ctx.request.body
    console.log(user)

    // 2.将user信息存储到数据库中

    // 3.查看查询的结果，告知前端创建成功
    ctx.body = '创建用户成功~'
})


//3.导出路由
module.exports = userRouter