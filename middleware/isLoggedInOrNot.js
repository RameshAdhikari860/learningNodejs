const jwt = require("jsonwebtoken")


const isLoggedInOrNot = (req, res) => {
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
                res.send("valid token, verified")
            }
        })
    }

}
module.exports = isLoggedInOrNot

// exports.isLoggedInOrNot = (req,res)=>{

// }
