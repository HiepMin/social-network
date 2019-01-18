const { User } = require('./../../models/index.model');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
module.exports = (req, res) => {
  const { email, password, username } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({
        msg: 'this email has already signed up!!',
        success: false
      })
      // create user avatar
      const optionsAvatar = {
        s: '200', // size
        r: 'pg', // rating
        d: 'mm', // default
      };
      const avatar = gravatar.url(email, optionsAvatar);
      // create user
      const newUser = new User({ email, password, username, avatar });
      // hash password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) return res.status(400).json({ msg: 'can not hash your password' });
          newUser.password = hash;
          // save new user
          newUser
            .save()
            .then(createdUser => {
              if (!createdUser) return res.json({ msg: 'can not create new user', success: false });
              res.json(createdUser);
            })  
            .catch(() => res.status(400));
        })
      })
    })
    .catch(err => res.status(400).json(err));
}