"use strict";
var express = require("express");
var router = express.Router();

/* GET httpClient page. */
router.get("/", function (req, res) {
  res.render("httpClient", { title: "HTTP Client", value: 0 });
});

router.get("/request/:value", function (req, res) {
  var value = req.params.value;

  if (value) {
    //res.send(value);

    res.render("httpClient", { title: "HTTP Client", value: value });
  } else {
    res.status(500).json({ status_code: 500, status_message: "The data does not exist." });
  }

  console.log(value);
});

router.get("/request", function (req, res) {
  var value = req.query.value;

  if (value) {
    //res.send(value);

    res.render("httpClient", { title: "HTTP Client", value: value });
  } else {
    res.status(500).json({ status_code: 500, status_message: "The data does not exist." });
  }

  console.log(value);
});

module.exports = router;
