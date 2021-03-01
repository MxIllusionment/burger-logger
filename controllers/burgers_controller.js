const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  /* TODO: Pull all burgers from DB and send to index */
  res.render("index");
});

router.post("/", (req, res) => {
  console.log(req.body);
  /* TODO: Parse POST data and insert/update */
  res.redirect("/");
});

module.exports = router;