const express = require('express');
const authController = require('./auth.controller');

const router = express.Router();

router.get('/login', authController.logIn);
router.get('/login/google', authController.loginWithGoogle);
router.get('/logout', authController.logOut);

module.exports = router;
