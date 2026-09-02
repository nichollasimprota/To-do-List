//importando o express
const express = require('express');
//cria a instancia do express
const app = express();
//define a porta do servidor 
const port = 3000;

//define a rota do servidor
//get é o metodo HTTP que é usado para buscar informações do servidor, '/' é o caminho da rota, req é o objeto de requisição e res é o objeto de resposta
app.get('/', (req, res) => {
  //manda resposta de volta
    res.send('API rodando');

});
//liga o servidor na porta definida. O seundo argumento é uma função que é executada quando o servidor está rodando 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});    