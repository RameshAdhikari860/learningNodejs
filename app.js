const express = require("express")
const app = express()
const db = require("./database/db.js")
// const app = require("express")()
app.set("view engine", "ejs") // tells express js to set environment for ejs to run  

app.use(express.urlencoded({ extended: true }))
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

// get todos - page 
app.get("/", async (req, res) => {
    const datas = await db.todos.findAll() // select * from todos
    res.render("todo/get-todo.ejs", { todos: datas })
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
    const { username, email, password } = req.body
    // const username = req.body.username 
    // const email = req.body.email 
    // const password = req.body.password


    await db.users.create({
        username: username,
        password: bcrypt.hashSync(password, 10),
        email: email
    })

    res.send("Registered successfully")
    // insert into users(email,username,password) value()
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    // login logic --> check if email exists or not 
    const users = await db.users.findAll({
        where: {
            email: email
        }
    })

    // select * from users where email = "manish@gmail.com" AND age = 22

    if (users.length == 0) { // email wala user vetena vane
        res.send("Not registered email")
    } else {
        // now check password, first --> plain password(form bata aako), hashed password already register garda table ma baseko 
        const isPasswordMatch = bcrypt.compareSync(password, users[0].password)
        if (isPasswordMatch) {
            // token generation 
            const token = jwt.sign({ name: "manish" }, "thisismysecrethaha", {
                expiresIn: "1d"
            })
            res.cookie("token", token)
            res.redirect("/")
            // res.send("Logged in successfully")
        } else {
            res.send("Invalid credentials")
        }
    }
})
app.post('/todo', async (req, res) => {
    const { task, description, date } = req.body
    await db.todos.create({
        task, description, date
    })
    res.redirect("/")
})



app.listen(4000, function () {
    console.log("Backend has started at port 4000")
})




