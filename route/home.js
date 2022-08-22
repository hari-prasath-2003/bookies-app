const express = require('express')
const route = express.Router()
const getHomeData = require("../controller/homeData")


route.get("/",async(req,res)=>{
    const books = await getHomeData()
    res.render("home",{datas:books})
})
route.get("/api",async(req,res)=>{
    const books = await getHomeData()
    res.json({data:books})
})

module.exports = route