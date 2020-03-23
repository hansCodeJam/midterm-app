const express = require('express');
const router = express.Router();
// const axios = require("axios");
const fetch = require('node-fetch');


/* GET home page. */
// router.get('/', function(req, res, next) {
  
// axios({
//     "method":"GET",
//     "url":"https://api-nba-v1.p.rapidapi.com/players/lastName/bryant",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
//     "x-rapidapi-key":"3e70e4bac1msh7c64682d89b9128p147368jsn5176252e429f" 
//     }
//     })
//     .then((response)=>{
//       console.log(response.data.api.players);
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

router.get('/', function(req, res, next) {
  let url = "https://nba-players.herokuapp.com/players-stats";

  let settings = { method: "Get" };
  
  fetch(url, settings)
      .then(res => res.json())
      .then((data) => {
        res.render('index', {data})
      })
  });
  
  module.exports = router;


