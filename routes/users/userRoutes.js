const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {validationResult} = require('express-validator');
const User = require('./models/User')
require('../../lib/passport')

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array() })
    }
    const { name, email, password } = req.body;
    User.findOne({email: email}).then((user) => {
      if (user) {
        //return req.flash('errors', 'User Already exists')
        return res.send('User Exists')
      } else {
          const newUser = new User();
    
      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(params.password, salt);
    
      newUser.name = name;
      newUser.email = email;
      newUser.password = password;
    
      newUser.save().then((user) => {
            if(user) {
              res.status(200).json({message: 'success', user})
            }
          }).catch(err=> {
            return next(err);
          })
            } 
          })
})

router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/us/nbaApp',
  failureRedirect: '/users/login',
  failureFlash: true
}))


module.exports = router;
