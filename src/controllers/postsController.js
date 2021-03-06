const Post = require('../models/post');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

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
    const postDraft = new Post({
      title: req.body.title,
      body: req.body.message,
      author: req.user,
      isPublic: true,
    })
    postDraft.save(function (err) {
      if (err) { return next(err) }
      res.json({
        username: 'new post',
        user: req.user,
      });
    })
  }]