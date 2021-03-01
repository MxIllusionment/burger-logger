const mysql = require("mysql");

const connInfo = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
};

var conn;

/* Opens a connection to the MySQL server and returns the connection */
function connection() {
  conn = mysql.createConnection(connInfo);

  conn.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }

    console.log(`connected as id ${conn.threadId}`);
  });

  return conn;
}

module.exports = connection;