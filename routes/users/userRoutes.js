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

router.post('/register', userController.register, userValidation);

router.get('/login', (req, res) => {
  res.render('auth/login', {error:null})
})

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}))


module.exports = router;
