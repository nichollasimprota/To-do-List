//criacao da variavel para importar os modulos necessarios
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
//chama a função createTask do model para criar uma nova tarefa
    taskModel.createTask(titulo, descricao, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar tarefa' });
        }
        res.status(201).json({id: results.insertId, titulo, descricao });
    });
}

function getTask(req, res) {
    const { id } = req.params;
    taskModel.getTask(id, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar tarefa' });
        if (results.length === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
        res.status(200).json(results[0]);
    });
}

function updateTask(req, res) {
    const {id} = req.params;
    const { titulo, descricao, status } = req.body;
    
    if (!titulo) return res.status(400).json({ error: 'O campo "titulo" é obrigatório' });
    
    taskModel.updateTask(id, titulo, descricao, status, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
        res.status(200).json({id, titulo, descricao, status });
    });
}

function deleteTask(req, res) {
    const { id } = req.params;

    taskModel.deleteTask(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro ao deletar tarefa' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
        res.status(200).send();
    });
}

//exporta as funções para serem usadas em outros arquivos
module.exports = {listTasks, createTask, getTask, updateTask, deleteTask};
