//criacao da variavel para importar os modulos necessarios
const db = require('../config/db.js');

function getAllTasks(callback) {
    db.query('SELECT * FROM tasks', callback);
}
function createTask(titulo, descricao, callback) {
    db.query('INSERT INTO tasks (titulo, descricao) VALUES (?, ?)', [titulo, descricao], callback);
}

function getTask(id, callback) {
    db.query('SELECT * FROM tasks WHERE id = ?', [id], callback);
}

function updateTask(id, titulo, descricao, status, callback) {
    db.query('UPDATE tasks SET titulo = ?, descricao = ?, status = ? WHERE id = ?', [titulo, descricao, status, id], callback);
}

function deleteTask(id, callback) {
    db.query('DELETE FROM tasks WHERE id = ?', [id], callback);
}
//exporta as funções para serem usadas em outros arquivos
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };