const authRouter = require('./auth.route');
const authController = require('./auth.controller');
const authCheck = require('./auth.check');

module.exports = {
  authRouter,
  authController,
  authCheck,
};
