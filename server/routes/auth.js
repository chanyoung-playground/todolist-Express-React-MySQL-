const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.post('/signin', authController.postSignin);
router.post('/signup', authController.postSignup);

module.exports = router;
