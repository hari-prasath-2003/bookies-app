const books = require('../models/books')

const getSearchData = async(bookName)=>{
    const book = await books.find({"title":bookName})
    return book
}

module.exports = getSearchData