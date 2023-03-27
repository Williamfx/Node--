const fs = require('fs')

// fs.readdir("./www/", (err, files) => {
//     if (err) {
//         console.log(err)
//     }


//     console.log(files)
// })

// fs.readdir("./www/", { withFileTypes: true }, (err, files) => {
//     files.forEach(item => {
//         if (item.isDirectory()) {
//             console.log("item是一个文件夹:", item.name)

//             fs.readdir(`./www/${item.name}`, { withFileTypes: true }, (err, files) => {
//                 console.log(files)
//             })
//         } else {
//             console.log("这是一个文件")
//         }
//     })
// })

// 批量文件读取函数
function readDirectory(path) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        files.forEach(item => {
            if (item.isDirectory()) {
                readDirectory(`${path}/${item.name}`)
            } else {
                console.log("获取到文件:", item.name)
            }
        });
    })
}
readDirectory('./www')