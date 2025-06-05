const express = require("express")
const app = express()
const db = require("./database/db.js")
// const app = require("express")()
app.set("view engine", "ejs") // tells express js to set environment for ejs to run  

app.use(express.urlencoded({ extended: true }))

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


app.post('/register', async (req, res) => {
    const { username, email, password, confirm_password } = req.body
    if (password !== confirm_password) {
        res.send("password and confirm password doesn't match")
    }

    await db.users.create({
        username,
        email,
        password

    })


})




app.listen(4000, function () {
    console.log("Backend has started at port 4000")
})




