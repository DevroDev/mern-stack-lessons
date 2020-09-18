var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
    res.send("User List");
});

router.get("/:id",function(req,res){
    var id=req.params.id;
    res.send("View user %s", id);
});

module.exports=router