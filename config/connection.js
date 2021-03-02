const mysql = require("mysql");

const connInfo = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
};

const connection = mysql.createPool(connInfo);


module.exports = connection;