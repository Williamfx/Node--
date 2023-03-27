const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log("服务器被访问")
    req.setEncoding('binary')

    //图片数据会携带
    const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '')
        // console.log(boundary);

    //客户端传递的数据是表单数据（请求体），请求体会携带请求头和boundary
    let formData = ''
    req.on("data", (data) => {
        formData += data;
    })
    req.on("end", () => {
        console.log(formData)

        imageType = 'image/jpeg'
        imageTypePosition = formData.indexOf(imageType) + imageType.length
        let imageData = formData.substring(imageTypePosition)

        //imageData开始位置会有两个空格
        imageData = imageData.replace(/^\s\s*/, '')

        //替换掉最后的boundary
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))
            // console.log(imageData)
        fs.writeFile('./bar.png', imageData, 'binary', () => {
            console.log('文件存储成功')
            res.end("文件上传成功~")
        })
        res.end("文件上传成功~")
    })
})

server.listen(8000, () => {
    console.log("服务器开启成功")
})