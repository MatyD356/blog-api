const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const passport = require('passport');

const { body, validationResult } = require('express-validator');

exports.new_user = [
  body('username', 'add username').trim().isLength({ min: 1 }).escape(),
  body('password', 'add password').isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    } else {
      User.findOne({ username: req.body.username }).exec(function (err, user) {
        if (err) { return next(err) }
        if (user) {
          return res.json({ errors: 'username taken' })
        } else {
          bcrypt.hash(req.body.password, 10, ((err, hashedPassword) => {
            const userDraft = new User({
              username: req.body.username,
              password: hashedPassword,
              type: 'admin',
            })
            userDraft.save(function (err) {
              if (err) { return next(err) }
              res.json({ username: 'new user created' })
            })
          }))
        }
      })
    }
  }
]

exports.login_user = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user,
        info,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user.toJSON(), 'secret');
      return res.json({ user, token });
    });
  })(req, res);
}