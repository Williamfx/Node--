const fs = require('fs')

//同步读取
// const res1 = fs.readFileSync('./bbb.txt', {
//     encoding: 'utf-8'
// })
// console.log(res1)

// console.log("后续的代码")

//异步读取：回调函数
// fs.readFile('./aaa.txt', {
//     encoding: 'utf-8'
// }, (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }

//     console.log("文件内容为：", data)
// })

// console.log("后续的代码")

//异步读取：promise
fs.promises.readFile("./aaa.txt", {
    encoding: 'utf-8'
}).then(data => {
    console.log("获取到结果", data)
}).catch(err => {
    console.log("发生了错误", err)
})