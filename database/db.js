// database connection ko code lekxam 

const { Sequelize, DataTypes } = require("sequelize")
// const Sequelize = require("sequelize").Sequelize
require("dotenv").config() // yo garepaxi only hami dotenv ko data haru yo file ma access garna milxaa

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

const db = {}
db.blogs = require("./../models/blogModel")(sequelize, DataTypes)
db.users = require("./../models/userModel")(sequelize, DataTypes)
db.todos = require("./../models/todoModel")(sequelize, DataTypes)

sequelize.sync({ alter: true }).then(() => {
    console.log("migrated successfully")
}) // migration code
// task product table -- name, price, quantity, description columns  

module.exports = sequelize

module.exports = db