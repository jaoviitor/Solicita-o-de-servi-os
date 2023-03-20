const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect(function(err){
    if(err){
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }

    console.log('Conexão bem-sucedida ao banco de dados.');
});

module.exports = connection;