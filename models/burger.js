const orm = require("../config/orm");

const burger = {
  /* Gets all burgers from DB */
  all(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },
  /* Adds one burger to the DB */
  create(data, cb) {
    orm.insertOne("burgers", data, (res) => cb(res));
  },
  /* Updates one burger in the DB */
  update(data, id, cb) {
    orm.updateOne("burgers", data, "id", id, (res) => cb(res));
  }
}

module.exports = burger;