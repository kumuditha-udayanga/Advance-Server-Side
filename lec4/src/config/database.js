const mysql = require('mysql2/promise');
require('dotenv').config();

console.log(process.env.DB_PASSWORD)
const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "lecture4",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;