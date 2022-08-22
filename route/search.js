const express = require('express')
const route = express.Router()
const getSearchData = require("../controller/searchData")

route.post("/api",async(req,res)=>{
    const book = await getSearchData(req.body.title)
    res.json({data:book})
})

module.exports = route