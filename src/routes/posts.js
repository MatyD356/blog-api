const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.list_posts);

router.post('/', postsController.new_post);

router.get('/:id', postsController.get_post);

module.exports = router;