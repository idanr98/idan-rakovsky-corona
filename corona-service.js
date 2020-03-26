var express = require("express");
var app = express();

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var classname = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
    
  }



app.get("/api/v1/labs", (req, res, next) => {
    res.status(200).json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.get("/api/v1/soldiers", (req, res, next) => {
    res.status(200).json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.get("/api/v1/cure/found", (req, res, next) => {
    res.status(200).json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.listen(8200, () => {
 console.log("Server running on port 8200");
});

