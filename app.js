const express = require("express")
const app = express()
const db = require("./database/db.js")
// const app = require("express")()
app.set("view engine", "ejs") // tells express js to set environment for ejs to run  

app.use(express.urlencoded({ extended: true }))
const bcrypt = require("bcrypt")

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


app.post("/register", async (req, res) => {
    console.log(req.body);
    const { username, email, password, confirm_password } = req.body
    // const username = req.body.username 
    // const email = req.body.email 
    // const password = req.body.password
    if (password !== confirm_password) {
        return res.send("Password and confirm password didnot match")
    }

    await db.users.create({
        username: username,
        password: bcrypt.hashSync(password, 10),
        email: email
    })

    res.send("Registered successfully")
    // insert into users(email,username,password) value()
})



app.listen(4000, function () {
    console.log("Backend has started at port 4000")
})




