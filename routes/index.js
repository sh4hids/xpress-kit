const config = require('../config/config');
const todoRouter = require('../components/todo/todo.route');

const init = function(app) {
  app.use(`/${config.api}/todos`, todoRouter);
}

module.exports = {
  init
};
