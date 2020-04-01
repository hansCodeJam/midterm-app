const bcrypt = ('bcryptjs');
const passport = ('passport');
const {validationResult} = require('express-validator');
const User = require('../routes/users/models/User');
require('../lib/passport');

module.exports = {
    register: (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array() })
        }
        const { name, email, password } = req.body;
        User.findOne({email: email}).then((user) => {
          if (user) {
            return res.send('User Exists')
          } else {
              const newUser = new User();
        
          newUser.name = name;
          newUser.email = email;
          newUser.password = password;
        
          newUser.save().then((user) => {
                if(user) {
                  res.render('auth/login')
                }
              }).catch(err=> {
                return next(err);
              })
                } 
              })
    }
};