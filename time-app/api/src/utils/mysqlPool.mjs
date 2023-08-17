import mysql from 'mysql2'

const MYSQL_HOST = process.env.MYSQL_HOST || "mysql";
const MYSQL_USER = process.env.MYSQL_USER || "times_user";
const MYSQL_PASS = process.env.MYSQL_PASS || "password";
const MYSQL_PORT = process.env.MYSQL_PORT || "3306";
const MYSQL_DB = process.env.MYSQL_DB || "times_db";

console.log(process.env);

const pool = mysql.createPool({
  connectionLimit: 500,
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB,
})

const CREATE_TIMES_TABLE_SQL = `CREATE TABLE IF NOT EXISTS times (
  id INT AUTO_INCREMENT PRIMARY KEY,
  time TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`

pool.getConnection((err, connection) => {
  if (!err) {
    console.log('Connected to the MySQL DB - ID is ' + connection.threadId)
    const createTimeTable = CREATE_TIMES_TABLE_SQL
    connection.query(createTimeTable, (err) => {
      if (!err) {
        console.log('Times table was created')
      }
    })
    connection.release()
  }
})

export default pool
