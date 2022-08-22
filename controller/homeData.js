const books = require('../models/books')

const getHomeData = async()=>{
    const data = await books.find().limit(3)
    return data
}

module.exports = getHomeData