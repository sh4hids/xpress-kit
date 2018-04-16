const express = require('express');
const todo = require('./todo.controller');
const { authCheck } = require('../../helpers/auth');

const router = express.Router();

router.post('/', todo.createTask);
router.get('/', authCheck, todo.getAllTasks);
router.get('/:id', todo.getSingleTask);
router.put('/:id', todo.updateTask);
router.delete('/:id', todo.deleteTask);

module.exports = router;
