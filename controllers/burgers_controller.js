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
router.post("/api/burgers", (req, res) => {
  /* Create new burger with provided name */
  burger.create({ burger_name: req.body.burger_name }, results => {
    if (results.affectedRows === 0) {
      return res.status(500).end();
    }
    res.status(200).end();
  });
});

/* PUT to update an existing burger */
router.put("/api/burgers/:id", (req, res) => {
  /* Update burger data */
  burger.update(req.body, req.params.id, results => {

    if (results.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;