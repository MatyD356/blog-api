const passport = require('passport');
const User = require('./models/user');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt');


passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function (username, password, cb) {
  return User.findOne({ username })
    .then(async user => {
      if (!user) {
        return cb(null, false, { message: 'username not found' })
      }
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return cb(null, user, { message: 'Logged In SuccesFully' })
      }
      return cb(null, false, { message: 'wrong password' })
    })
}))

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
},
  function (jwtPayload, cb) {
    return User.findOne(jwtPayload.id)
      .then(user => {
        return cb(null, user);
      })
      .catch(err => {
        return cb(err);
      });
  }))