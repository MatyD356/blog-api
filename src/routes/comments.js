const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/', commentsController.list_post);

router.post('/', commentsController.add_comment);

router.get('/:id', commentsController.get_comment);

module.exports = router;