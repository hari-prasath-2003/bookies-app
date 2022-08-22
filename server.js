const express = require("express")
const app = express()
const homeRoute = require('./route/home')
const searchRoute = require('./route/search')
const mongoose = require('mongoose')

app.use(express.json())
app.use('/search',searchRoute)
app.use('/public',express.static("public"))
app.set("view engine","ejs")
app.use("/home",homeRoute)
mongoose.connect("mongodb+srv://hari:hari@cluster0.glxgy.mongodb.net/bookstore?retryWrites=true&w=majority",{ useNewUrlParser: true,})


app.listen(process.env.PORT || 3000)
