const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');
//define as rotas para as tarefas
router.get('/tasks', taskController.listTasks);
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
//exporta o router para ser usado em outros arquivos
module.exports = router;