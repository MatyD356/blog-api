const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //get all posts in db and send
  res.json({ username: 'posts' });
});

router.get('/:id', (req, res) => {
  //get one post and send
  res.json({ username: `post ${req.params.id}` });
});

router.post('/new', (req, res) => {
  //create new post
  res.json({ username: 'new post' });
});

module.exports = router;