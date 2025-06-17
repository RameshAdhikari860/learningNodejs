const jwt = require("jsonwebtoken")


const isLoggedInOrNot = (req, res, next) => {
    // receive token 
    const token = req.cookies.token
    // verify token 
    if (!token) {
        res.send("Please log in")
    } else {
        // verify the token 
        jwt.verify(token, "thisismysecrethaha", (error, result) => {
            if (error) {
                res.send("invalid token")
            } else {
                req.userId = result.id
                next()
            }
        })
    }

}
module.exports = isLoggedInOrNot

// exports.isLoggedInOrNot = (req,res)=>{

// }
