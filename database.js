var mysql = require('mysql2');
var config = require('./config');

var connection = mysql.createConnection(config.db.url);


// Database setup
connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db.database}`, function (err) {
    if (err) throw err;
    connection.query(`USE ${config.db.database}`, function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS diagrams(' +
            'id INT NOT NULL AUTO_INCREMENT,' +
            'PRIMARY KEY(id),' +
            'name VARCHAR(50),' +
            'data JSON,' +
            'createdAt TIMESTAMP' +
            ')',
            function (err) {
                if (err) throw err;
            });
    });
});

module.exports = connection;
