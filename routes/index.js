const express = require('express');
const router = express.Router();
// const axios = require("axios");
const fetch = require('node-fetch');


/* GET home page. */
// router.get('/', function(req, res, next) {
  

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


