const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Mysql054DKTE@',
  database: 'declutter_task_manager'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

module.exports = connection;
