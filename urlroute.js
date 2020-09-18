var express=require("express");
var multer=require("multer");
var app=express();

app.use(multer({dest:'./upload/'}));

var server=app.listen(3000,function(){
    app.post("/",function(req,res){
        res.send(req.files);
    });
})