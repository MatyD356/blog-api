const Post = require('../models/post');
const { body, validationResult } = require('express-validator');

//get all posts in db and send
exports.list_posts = (req, res) => {
  Post.find(function (err, posts) {
    if (err) { return next(err) }
    res.json({ posts });
  })
};

//get one post and send
exports.get_post = (req, res) => {
  Post.findById(req.params.id, function (err, post) {
    if (err) { return next(err) }
    res.json({ post });
  })
}

//create new post
exports.new_post = [
  body('title', 'Add a title').trim().isLength({ min: 1 }).escape(),
  body('message', 'Add comment body').trim().isLength({ min: 1 }).escape(),
  // body('author', 'Add comment author name').trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    } else {
      const postDraft = new Post({
        title: req.body.title,
        body: req.body.message,
        author: req.body.author,
        isPublic: req.body.isPublic,
      })
      postDraft.save(function (err) {
        if (err) { return next(err) }
        res.json({ username: 'new post' });
      })
    }
  }]