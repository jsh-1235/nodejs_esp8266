var express = require("express");
var router = express.Router();
var path = require("path");

/* GET websocketclient listing. */
router.get("/", function (req, res) {
  res.render("websocketclient", { title: "Websocket Client" });
});

module.exports = router;
