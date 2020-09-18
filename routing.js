var express=require('express');
var homeRouter=require('./homeroute');
var userRouter=require("./aboutroute");
var app=express();

app.use("/home",homeRouter);
app.use("/users",userRouter);

var server=app.listen(3000,function(){
    console.log("ExpressJs server running on port 3000")
})