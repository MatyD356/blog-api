const Comment = require('../models/comment');

const { body, validate, validationResult } = require('express-validator');
//get all comments from db
exports.list_post = (req, res) => {
  Comment.find(function (err, comments) {
    if (err) { return next(err) }
    console.log(comments)
    res.json({ comments })
  })
}
//get particular commment from db
exports.get_comment = (req, res) => {
  res.json({ comment: `comment ${req.params.id}` })
}
//add coment to db
exports.add_comment = [
  body('title', 'Add a title').trim().isLength({ min: 1 }).escape(),
  body('message', 'Add comment body').trim().isLength({ min: 1 }).escape(),
  body('author', 'Add comment author name').trim().isLength({ min: 1 }).escape(),
  body('authorEmail', 'Add comment author email').trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() })
    } else {
      const commentDraft = new Comment({
        title: req.body.title,
        body: req.body.message,
        author: req.body.author,
        authorEmail: req.body.authorEmail,
      })
      commentDraft.save(function (err) {
        if (err) { return next(err) }
        res.json({ ok: 'done' })
      })
    }
  }]