// 1.导入app
const app = require('./app')
const { SERVER_PORT } = require('./config/server.js')

// 2.将app启动起来
app.listen(SERVER_PORT, () => {
    console.log('coderhub的服务器启动成功~')
})

// 一个月前的血型报告：A型血
// 一份违约通知书，日期同样是一个月前的
// 储物室里有比较多的药，一般人家里不会备如此多的药，当时法证部取证的时候也有在抱怨
