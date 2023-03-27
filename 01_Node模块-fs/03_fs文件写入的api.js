const fs = require('fs')

const content = "cccc"

//同步写入
// fs.writeFileSync("./ddd.txt", "bbb")
// console.log("文件写入成功")

// 异步写入：回调函数
fs.promises.writeFile("./fff.txt", content, {
    encoding: 'utf-8',
    flag: 'a'
}, (err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log("文件写入成功")
})

//异步写入：promise
// fs.promises.writeFile("./ccc.txt", content, {
//     encoding: 'utf-8',
//     flag: 'a'
// }).then(res => {
//     console.log("文件写入成功")
// }).catch(err => {
//     console.log(err)
// })