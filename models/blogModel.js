

const makeBlogTable = (sequelize, Datatypes) => {
    const Blog = sequelize.define("blog", {
        hahahahahhaa: {
            type: Datatypes.STRING
        },
        description: {
            type: Datatypes.STRING
        },
        subtitle: {
            type: Datatypes.STRING
        }
    })
    return Blog
}

module.exports = makeBlogTable

// .define() == table banaedine vayo 

