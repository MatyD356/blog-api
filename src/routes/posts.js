const express = require('express');
const passport = require('passport');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.list_posts);

router.post('/', passport.authenticate('jwt', { session: false }), postsController.new_post);

router.get('/:id', postsController.get_post);

module.exports = router;

