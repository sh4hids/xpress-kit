const express = require('express');
const authController = require('./auth.controller');

const router = express.Router();

router.get('/login', authController.logIn);
// router.get('/login/google', authController.loginWithGoogle);
router.get('/login/google/redirect', authController.googleCallbackHandler);
router.get('/login/github', authController.logIn);
router.get('/login/github/redirect', authController.githubCallbackHandler);
router.get('/logout', authController.logOut);

module.exports = router;
