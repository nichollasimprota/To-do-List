require('./config/db.js');
//importando o express
const express = require('express');
//importando as rotas de tarefas
const taskRoutes = require('./routes/taskRoutes.js');
//cria a instancia do express
const app = express();
//define a porta do servidor 
const port = 3000;

//middleware para o Express entender JSON no corpo de requisição
app.use(express.json());
app.use('/api', taskRoutes);


//define a rota do servidor
app.get('/', (req, res) => {
    res.send('API rodando');

});
//liga o servidor na porta definida. O seundo argumento é uma função que é executada quando o servidor está rodando 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});    