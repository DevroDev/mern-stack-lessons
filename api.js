var express = require("express");
var parser = require("body-parser");
var api = require("./api.js");
var app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(express.static("./static"));
app.use("/api", api);

var server = app.listen(3000, function () {
  console.log("ExpressJs server is running on port 3000");
});
