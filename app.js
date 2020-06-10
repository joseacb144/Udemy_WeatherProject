// Require Express module
const express = require("express");
// Initialize a new Express app
const app = express();


app.get("/",function(req, res){
  res.send("Server is up and running!");
})


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
