const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.list_posts);

router.post('/', verifyToken, postsController.new_post);

router.get('/:id', postsController.get_post);

module.exports = router;

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next()
  } else {
    res.sendStatus(403);
  }
}