const express = require('express');
const router = express.Router();
const todo = require('./todo.controller');

router.post('/', todo.createTask);
router.get('/', todo.getAllTasks);
router.get('/:id', todo.getSingleTask);
router.put('/:id', todo.updateTask);
router.delete('/:id', todo.deleteTask);

module.exports = router;
