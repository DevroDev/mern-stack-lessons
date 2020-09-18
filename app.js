var express = require("express");
var mongojs = require("mongojs");
var router = express.Router();

var db = mongojs(["users"]);

router.get("/users", function (req, res) {
  db.users.find(function (err, users) {
    res.status(200).json(users);
  });
});

router.post("/users", function (req, res) {
  db.users.insert(req.body, function (err, result) {
    res.status(200).send(result._id);
  });
});

router.get("/users/:id", function (req, res) {
  var id = req.params.id;
  db.users.find({ __id: mongojs.ObjectId(id) }, function (err, user) {
    if (user) res.status(200).json(user);
    else res.status(404).json({ msg: "Not Found" });
  });
});

router.put("/users/:id", function (req, res) {
  var id = mongojs.ObjectId(req.params.id);
  var data = req.body;
  data.__id = id;
  db.users.save(data, function (err, result) {
    res.status(200).send(result.nModified);
  });
});

router.delete("/users/:id", function (req, res) {
  var id = mongojs.ObjectId(req.params.id);

  db.users.remove({ __id: id }, function (err, result) {
    res.status(200).send(result.nRemoved);
  });
});

module.exports = router;
