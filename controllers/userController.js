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
    }
};