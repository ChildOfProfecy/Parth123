const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("Hello World")
});

app.get("/myName",function(req,res){
    res.send("Parth Mehta")
});

app.listen(3000,function(){
    console.log("server running on http://localhost:3000")
});