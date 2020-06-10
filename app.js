// Require Express module and https module
const express = require("express");
const https = require("https");

// Initialize a new Express app
const app = express();


app.get("/",function(req, res){
// The link is long so I assigned it to constant url
const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=86adea560ce2c6405450b6a93f97e7d9&units=metric";
  // Get the weather API data
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      console.log(temp);
    })
  })
  res.send("Server is up and running!");
})


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
