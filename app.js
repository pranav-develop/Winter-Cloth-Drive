//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const { static } = require("express");
const app = express();
app.set("view engine", 'ejs');
app.use(static("public/"));

app.get("/", function(request, response){
    response.render("index");
});
app.get("/donate", function(request, response){
    response.render("donate");
});

app.listen("3000", function(){
    console.log("Server is running on port 3000.....");
});
