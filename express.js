var express=require('express')
var app=express();
var server=app.listen(3000,function(){
    console.log("Express server is running");
    app.get('/',function(req,res){
        res.sendFile(__dirname+"/index.html");
    })
})