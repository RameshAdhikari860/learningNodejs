// database connection ko code lekxam 

const { Sequelize } = require("sequelize")
// const Sequelize = require("sequelize").Sequelize
require("dotenv").config() // yo garepaxi only hami dotenv ko data haru yo file ma access garna milxa

const sequelize = new Sequelize(
    {
        database: process.env.database_name,
        username: process.env.database_username,
        port: process.env.database_port,
        host: process.env.database_host,
        dialect: "mysql",
        password: process.env.database_password
    }
) // making object from Sequelize class


sequelize.authenticate()
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log("error", err);
    })
// Dog dog = new Dog()


// const info = {
//     name : "manish",
//     age : 23
// }

// const name = info.name
// const age = info.age
// // destructure
// const {name,age} = info

module.exports = sequelize