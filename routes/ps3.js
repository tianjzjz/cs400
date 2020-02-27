const express = require('express');
const router = express.Router();
const request = require ('request');
const path = require('path')

router.get('/', function(req,res,next){
    res.render('ps3',  {
        str: "Hey now"
    })
})

router.post('/', function(req,res,next){
    console.log(req.body)
    res.render('ps3',  {
        str: req.body.string,
        len: req.body.string.length
    })
})



module.exports = router;