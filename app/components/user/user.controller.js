// const User = require('./user.model');

const createUser = function (req, res, next) {
  res.send({
    success: true,
    message: 'User created successfully',
    data: req.body,
  });
};

const updateUser = function (req, res, next) {
  res.send({
    success: true,
    message: 'User updated successfully',
    data: req.body,
  });
};

const getUserById = function (req, res, next) {
  res.send({
    success: true,
    message: 'User found!',
    data: req.body,
  });
};

const getAllUser = function (req, res, next) {
  res.send({
    success: true,
    message: 'All user in DB',
    data: req.body,
  });
};

const deleteUser = function (req, res, next) {
  res.send({
    success: true,
    message: 'User deleted successfully',
    data: req.body,
  });
};


module.exports = {
  createUser,
  updateUser,
  getUserById,
  getAllUser,
  deleteUser,
};
