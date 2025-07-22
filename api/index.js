const express = require("express");
const app = express();
const chalk = require("chalk");
const path = express()
const ejs = require("ejs")


app.set("view engine", ejs)
app.set("views", path.join(__dirname, "../views"))



app.get("/",(req,res)=>{
    res.render("index");
})


module.exports = app;
