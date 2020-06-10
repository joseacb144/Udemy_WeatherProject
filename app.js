// Require Express module and https module
const express = require("express");
const https = require("https");

// Initialize a new Express app
const app = express();

app.get("/",function(req, res){
// The link is long so I assigned it to constant url
const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=86adea560ce2c6405450b6a93f97e7d9&units=imperial";
  // Get the weather API data
  https.get(url, function(response){
    console.log(response.statusCode);

    // Get ahold of the data from response
    response.on("data", function(data){
      // Parse JSON data
      const weatherData = JSON.parse(data);
      // Assign temperature to temp
      const temp = weatherData.main.temp;
      // Assign weather description to weatherDescription
      const weatherDescription = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;
      const iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently " + weatherDescription + "<p>");
      res.write("<h1>The temperature in London is " + temp + " degrees Fahrenheit.</h1>");
      res.write("<img src=" + iconURL +">");

      res.send();
// HUGE NOTE: You can only have 1 res.send or you will get an error.
// NOTE: You can have more than 1 res.write.
    })
  })
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
