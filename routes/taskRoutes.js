const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');
//define as rotas para as tarefas
router.get('/tasks', taskController.listTasks);
router.post('/tasks', taskController.createTask);
//exporta o router para ser usado em outros arquivos
module.exports = router;