const express = require("express")
const app = express()
require("./database/db.js")
// const app = require("express")()
app.set("view engine", "ejs") // tells express js to set environment for ejs to run  

// get todos - page 
app.get("/", (req, res) => {
    res.render("todo/get-todo.ejs")
})

// add todo - page 
app.get("/add-todo", (req, res) => {
    res.render("todo/add-todo")
})

// update todo -- page 
app.get("/update-todo", (req, res) => {
    res.render("todo/update-todo")
})
// 
// login page 
app.get("/login", (req, res) => {
    res.render("authentication/login")
})
// register page 
app.get("/register", (req, res) => {
    res.render("authentication/register")
})


app.listen(4000, function () {
    console.log("Backend has started at port 4000")
})




