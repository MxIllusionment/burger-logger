const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  /* TODO: Pull all burgers from DB and send to index */
  res.render("index", { burgers: [{ id: 1, burger_name: "Plain Ol' Burger", devoured: false }] });
});

router.post("/api/add", (req, res) => {
  console.log(req.body);
  /* TODO: Parse POST data and insert new burger */
  res.redirect("/");
});

router.post("/api/devour/:id", (req, res) => {
  console.log(req.params.id);
  /* TODO: Parse POST data and update burger as devoured */
  res.redirect("/");
});

module.exports = router;