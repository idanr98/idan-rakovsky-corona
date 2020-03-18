var express = require("express");
var app = express();

app.get("/v1/labs", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.listen(8200, () => {
 console.log("Server running on port 8200");
});