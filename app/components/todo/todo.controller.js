// const Todo = require('./todo.model');

const createTask = function (req, res, next) {
  console.log(req.body);
  res.send({
    success: true,
    message: 'Added...',
    data: req.body,
  });
};

const getSingleTask = function (req, res, next) {
  res.send({
    success: true,
    message: 'Found item',
    data: [
      {
        todo: 'Hello',
        done: false,
      },
    ],
  });
};

const getAllTasks = function (req, res, next) {
  res.send({
    success: true,
    message: 'Found item',
    data: [
      {
        todo: 'Task 1',
        done: false,
      },
      {
        todo: 'Task 2',
        done: true,
      },
    ],
  });
};

const updateTask = function (req, res, next) {
  console.log(req.body);
  res.send({
    success: true,
    message: 'Updated...',
    data: req.body,
  });
};

const deleteTask = function (req, res, next) {
  console.log(req.params.id);
  res.send({
    success: true,
    message: 'Deleted...',
    data: req.params.id,
  });
};


module.exports = {
  createTask,
  getSingleTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
