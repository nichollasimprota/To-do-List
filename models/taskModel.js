const db = require('../config/db.js');
function getAllTasks(callback) {
    db.query('SELECT * FROM tasks', callback);
}
function createTask(titulo, descricao, callback) {
    db.query('INSERT INTO tasks (titulo, descricao) VALUES (?, ?)', [titulo, descricao], callback);
}

module.exports = { getAllTasks, createTask };