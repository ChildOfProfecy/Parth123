const express = require("express");

const app = express();
const h = 




app.use(express.static("frontend"))//tells to serve all your static files in frontend


app.get("/html",function(req,res){
    res.sendFile(__dirname+"/frontend/index.html");//"__dirname" gives location of server file
});

app.listen(3000,function(){
    console.log("server running on http://localhost:3000")
});

