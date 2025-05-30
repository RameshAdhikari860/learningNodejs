const express = require("express")
const app = express()
require("./database/db.js")
// const app = require("express")()
app.set("view engine", "ejs") // tells express js to set environment for ejs to run  

app.get("/", function (req, res) {
    // let name = "Manish"
    res.render("home", { age: 23, name: "Manish" })
})

app.get("/about", function (req, res) {
    res.render("about", { text: "about" })
})

// task 
// /about - about.ejs(This is about page) vanerw aaunu paryo but , about vanerw lekeko word chai app.js bata pass hunu paryo 

app.listen(4000, function () {
    console.log("Backend has started at port 4000")
})




