const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'music_db',
    connectionLimit: 5
});

const statement = 'SELECT * FROM `products` WHERE price > ? AND score > ?;'
connectionPool.execute(statement, [1000, 8], (err, values) => {
    console.log(values)
})

