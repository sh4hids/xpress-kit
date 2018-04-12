const config = require('../config/config');
const { todoRouter } = require('../components/todo');
const { userRouter } = require('../components/user');

const init = function (app) {
  app.use(`/${config.api}/todos`, todoRouter);
  app.use(`/${config.api}/users`, userRouter);
};

module.exports = {
  init,
};
