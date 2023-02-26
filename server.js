const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set('strictQuery',true);//to remove connection warning
dotenv.config()
const app = express();
const str = process.env.MONGO_CONNECTION_STRING;

mongoose.connect(process.env.MONGO_CONNECTION_STRING,function(err){
    if(err){
        console.error(err)
    }else{
        console.log("DB Connection Success");
        app.listen(3000,function(){
            console.log("server running on http://localhost:3000")
        });
    }
});

app.use(express.static("frontend"))//tells to serve all your static files in frontend


app.get("/html",function(req,res){
    res.sendFile(__dirname+"/frontend/index.html");//"__dirname" gives location of server file
});



