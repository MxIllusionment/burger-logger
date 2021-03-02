const mysql = require("mysql");

const connInfo = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
};

const connection = mysql.createConnection(connInfo);

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${conn.threadId}`);
});

module.exports = connection;