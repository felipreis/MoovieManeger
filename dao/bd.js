const {Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'MoovieManeger',
    password: 'femali1498',
    port: 5432, 
  });

  client.connect()
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err));

  
  module.exports = client;