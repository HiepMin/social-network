const JwtTrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
require('./../models/User.model');
const User = mongoose.model('users');
const { SECRETKEY } = require('./key');
const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: SECRETKEY
};
module.exports = passport => {
  passport.use(new JwtTrategy(options, async (jwt_payload, done) => {
    const findUser = await User.findById({ _id: jwt_payload.id });
    if (!findUser) return done(null, false);
    return done(null, findUser);
  }))
}