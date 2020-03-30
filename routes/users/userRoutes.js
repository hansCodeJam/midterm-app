const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {validationResult} = require('express-validator');
const userValidation = require('../utils/userValidation');
const fetch = require('node-fetch');  
//const User = require('./models/User')
const userController = require('../../controllers/userController')
//const fetch = require('node-fetch');
require('../../lib/passport')

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.get('/option', (req, res) => {
  res.render('option')
})

router.post('/register', userController.register, userValidation);

router.get('/login', (req, res) => {
  res.render('auth/login', {error:null})
})

router.get('/player', function(req, res, next) {
  let url = "https://nba-players.herokuapp.com/players-stats";

  let settings = { method: "Get" };
  
  fetch(url, settings)
      .then(res => res.json())
      .then((data) => {
        res.render('index', {data})
      })
  })

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/users/option',
  failureRedirect: '/users/login',
  failureFlash: true
}))

module.exports = router;
