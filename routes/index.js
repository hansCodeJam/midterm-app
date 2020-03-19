var express = require('express');
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  
axios({
    "method":"GET",
    "url":"https://api-nba-v1.p.rapidapi.com/players/lastName/bryant",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
    "x-rapidapi-key":"3e70e4bac1msh7c64682d89b9128p147368jsn5176252e429f" 
    }
    })
    .then((response)=>{
      console.log(response.data.api.players);
    })
    .catch((error)=>{
      console.log(error)
    })
  res.render('index', { title: 'Express' });
});

module.exports = router;
