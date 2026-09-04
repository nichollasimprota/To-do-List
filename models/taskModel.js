//criacao da variavel para importar os modulos necessarios
const db = require('../config/db.js');
function getAllTasks(callback) {
    db.query('SELECT * FROM tasks', callback);
}
function createTask(titulo, descricao, callback) {
    db.query('INSERT INTO tasks (titulo, descricao) VALUES (?, ?)', [titulo, descricao], callback);
}
//exporta as funções para serem usadas em outros arquivos
module.exports = { getAllTasks, createTask };