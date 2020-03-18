const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {validationResult} = require('express-validator');
const userValidation = require('../utils/userValidation');
//const User = require('./models/User')
const userController = require('../../controllers/userController')
require('../../lib/passport')

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.get('/nba', async (req, res) => {
  const api_url = 'https://api-nba-v1.p.rapidapi.com/3e70e4bac1msh7c64682d89b9128p147368jsn5176252e429f';
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  console.log(json);
})

router.post('/register', userController.register, userValidation);

router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}))


module.exports = router;
