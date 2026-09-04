const taskModel = require('../models/taskModel');

function listTasks(req, res) {
    taskModel.getAllTasks((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar tarefas' });
        }
        res.status(200).json(results);
    });
}

function createTask(req, res) {
    const { titulo, descricao } = req.body;

    if (!titulo) {
        return res.status(400).json({ error: 'O campo "titulo" é obrigatório' });
    }

    taskModel.createTask(titulo, descricao, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar tarefa' });
        }
        res.status(201).json({id: results.insertId, titulo, descricao });
    });
}

module.exports = {listTasks, createTask};
