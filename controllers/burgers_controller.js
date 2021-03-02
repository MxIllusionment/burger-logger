const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

/* GET to return index with all burger records */
router.get("/", (req, res) => {
  /* Pull all burgers from DB and send to index */
  burger.all(results =>
    res.render("index", { burgers: results })
  );
});

/* POST to add a new burger */
router.post("/api/add", (req, res) => {
  /* Create new burger with provided name */
  burger.create({ burger_name: req.body.burger_name }, results => {
    if (results.affectedRows === 0) {
      return res.status(500).end();
    }
    res.redirect("/");
  });

});

/* POST to update an existing burger by setting devoured to TRUE */
router.post("/api/devour/:id", (req, res) => {
  /* Update burger as "Devoured" */
  burger.update({ devoured: true }, req.params.id, results => {
    if (results.affectedRows === 0) {
      return res.status(404).end();
    }
    res.redirect("/");
  })
});

module.exports = router;