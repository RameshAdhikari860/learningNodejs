


const makeTodoTable = (sequelize, Datatypes) => {
    const Todo = sequelize.define("todo", {
        task: {
            type: Datatypes.STRING
        },
        description: {
            type: Datatypes.TEXT
        },
        date: {
            type: Datatypes.STRING
        },
        status: {
            type: Datatypes.ENUM("completed", "pending"),
            defaultValue: "pending"
        }
    })
    return Todo
}

module.exports = makeTodoTable