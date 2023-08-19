import mysql from 'mysql2'

const MYSQL_HOST = String(process.env.MYSQL_HOST);
const MYSQL_USER = String(process.env.MYSQL_USER);
const MYSQL_PASS = String(process.env.MYSQL_PASS);
const MYSQL_PORT = String(process.env.MYSQL_PORT);
const MYSQL_DB = String(process.env.MYSQL_DB);

const pool = mysql.createPool({
  connectionLimit: 500,
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB,
});

console.log(pool);

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
