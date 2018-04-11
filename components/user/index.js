const User = require('./user.model');
const userController = require('./user.controller');
const userRouter = require('./user.route');

module.exports = {
  User,
  userController,
  userRouter,
};
