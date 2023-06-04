const express = require('express')

const app = new express()

app.post('/login', (req, res, next) => {
    res.status(201)
    res.json('创建用户成功~')
})

app.get('/home', (req, res, next) => {

})

// 用户的接口
// 1.将用户的接口直接定义在接口中
// app.get('/users', (req, res, next) => {})
// app.get('/users/:id', (req, res, next) => {})
// app.post('/users', (req, res, next) => {})
// app.delete('/users/:id', (req, res, next) => {})
// app.patch('/users/:id', (req, res, next) => {})

//2.将用户的接口定义在单独的接口中
const userRouter = express.Router()
userRouter.get('/', (req, res, next) => {
    res.json("用户列表数据")
})
userRouter.get('/:id', (req, res, next) => {
    const id = req.params.id
    res.json('某一个用户数据' + id)
})
userRouter.post('/', (req, res, next) => {
    res.json("创建用户成功")
})
userRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id
    res.json('删除某一个用户数据' + id)
})
userRouter.patch('/:id', (req, res, next) => {
    const id = req.params.id
    res.json('删除某一个用户数据' + id)
})

// 让路由生效
app.use('/users', userRouter)

// 启动服务器
app.listen(9000, () => {
    console.log('服务器开启成功~')
})