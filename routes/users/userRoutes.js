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

router.get('/player', userController.api);

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/users/option',
  failureRedirect: '/users/login',
  failureFlash: true
}))

module.exports = router;
