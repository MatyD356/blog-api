const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.new_user);

router.post('/login', userController.login_user);

module.exports = router;

