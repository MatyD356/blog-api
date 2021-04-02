const User = require('../models/user');

const { body, validationResult } = require('express-validator');

exports.new_user = [
  body('username', 'add username').trim().isLength({ min: 1 }).escape(),
  body('password', 'add password').isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    } else {
      const userDraft = new User({
        username: req.body.username,
        password: req.body.password,
        type: 'admin',
      })
      userDraft.save(function (err) {
        if (err) { return next(err) }
        res.json({ username: 'new user' })
      })
    }
  }
]