const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.list_posts);

router.get('/:id', postsController.get_post);

router.post('/new', postsController.new_post);

module.exports = router;