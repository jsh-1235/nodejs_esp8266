var express = require("express");
var router = express.Router();
var path = require("path");

/* GET server listing. */
router.get("/", function (req, res, next) {
  var root = path.resolve();

  var filename = root + "/public/html/tcpServer.html";

  console.log("Path : " + filename);

  res.sendFile(filename);
});

module.exports = router;
