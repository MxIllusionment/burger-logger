const connection = require("./connection");

const orm = {
  /* Select all rows and columns in the given table */
  selectAll(tableName, cb) {
    connection.query("SELECT * FROM ??", [tableName], (err, result) => {
      if (err) throw err;

      cb(result);
    });

  },

  /* Insert one item into the given table */
  insertOne(tableName, data, cb) {
    connection.query("INSERT INTO ?? SET ?", [tableName, data], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },

  /* Update one item in the given table based on the provided match parameter */
  updateOne(tableName, data, matchCol, matchVal, cb) {
    connection.query("UPDATE ?? SET ? WHERE ??=?", [tableName, data, matchCol, matchVal], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  }
}

module.exports = orm;