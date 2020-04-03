var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var city;
  if(req.query.city==null){
    city = 'boston';
  }
  else{
    city = req.query.city;
  }
  //console.log(req.query);
  var nurl = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=199b191f859d63a526abf5c9ef5a32ed';
  request({url:nurl,json:true},(error,response,body)=>{
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.render('weather',{city:city,body:body});
    }
  });
});

module.exports = router;
