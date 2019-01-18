const { User } = require('./../../models/index.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRETKEY } = require('./../../config/key');
module.exports = (req, res) => {
  const { email, password } = req.body;
  // check email has been already existed or not yet ?
  User.findOne({ email })
    .then(user => {
      if (!user) {
        // existed
        return res.status(400).json({ msg: 'This email has not signed up yet', success: false });
      }
      bcrypt.compare(password, user.password, (error, result) => {
        if (!result) {
          return res.status(400).json({ msg: 'Password is not correctly, please check it again!! ', success: false  });
        }
        // login here
        // create payload and save it into token
        const payload = {
          id: user._id,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          joinDate: user.joinDate,
        };
        // create token
        jwt.sign(payload, SECRETKEY, { expiresIn: 3600 }, (err, token) => {
          if (err) return res.status(404).json({ msg: 'Can not login !!', success: false  });
          res.json({
            success: true,
            token: `Bearer ${token}`
          })
        })
      })
    })
    .catch(err => res.status(400).json(err));
}