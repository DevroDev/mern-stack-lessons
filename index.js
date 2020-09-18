var mongojs = require("mongojs");
var db = mongojs("mydb", ["issues", "user"]);
db.user.find(function (err, data) {
  console.log(data);
  db.close();
});
/*
db.user.insert({
    name:"Lahtaw Nu Nu",
    role:"CFO",
    message:"I am Fucking CEO"
},function(){
    db.close();
})*/
db.user.remove(
  {
    _id: mongojs.ObjectID("5f62f2123c37c315b800b888"),
  },
  function () {
    db.close();
  }
);
db.user.update(
  { role: "CEO" },
  { $set: { role: "CFO" } },
  { multi: true },
  function () {
    db.close();
  }
);
