


const makeUserTable = (sequelize, Datatypes) => {
    const User = sequelize.define("user", {
        username: {
            type: Datatypes.STRING
        },
        password: {
            type: Datatypes.STRING
        }
    })
    return User
}

module.exports = makeUserTable