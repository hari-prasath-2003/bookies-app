const {Schema, default: mongoose} = require("mongoose") 

const booksSchema = new Schema({
    
        title: String,
        author: String,
        year_written: Number,
        edition: String,
        price: Number
     
})

module.exports = mongoose.model("book",booksSchema)