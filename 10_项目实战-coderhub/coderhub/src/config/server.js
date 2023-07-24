const dotenv = require('dotenv')

dotenv.config()

console.log(process.env.SERVER_PORT)
console.log(process.env.MY_NAME)

module.exports = {
    SERVER_PORT
} = process.env