const config = require('../config/config');
const { todoRouter } = require('../components/todo');
const { userRouter } = require('../components/user');
const { authRouter } = require('../helpers/authentication');

const init = function (app) {
  app.use('/auth', authRouter);
  app.use(`/${config.api}/todos`, todoRouter);
  app.use(`/${config.api}/users`, userRouter);
};

module.exports = {
  init,
};
