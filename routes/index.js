const express = require("express");
const router = express.Router();
const restaurant = require('../data');

router.get('/',(req,res)=>{
    res.render('index',{
        restaurants
    })
})
module.exports=router;