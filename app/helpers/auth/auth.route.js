const express = require('express');
const authController = require('./auth.controller');
const passport = require('passport');

const router = express.Router();

// router.get('/login/google', authController.loginWithGoogle);
router.get('/login/google/redirect', authController.googleCallbackHandler);
router.get('/login/github', passport.authenticate('github', {
  scope: ['user:email'],
}));
router.get('/github/redirect', passport.authenticate('github', { failureRedirect: '/auth/login' }), authController.githubCallbackHandler);
router.get('/logout', authController.logOut);

module.exports = router;
