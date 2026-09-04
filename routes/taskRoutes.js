const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');

router.get('/tasks', taskController.listTasks);
router.post('/tasks', taskController.createTask);

module.exports = router;