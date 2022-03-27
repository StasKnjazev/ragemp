
// REQUIRES

const mysql2 = require('mysql');
const terminal = require('./terminal.js');

// CODE

let mysql = {};

mysql.main = mysql2.createPool({
    connectionLimit: 2000,

    host: mp.basemode.config.mysql.hostname,
    user: mp.basemode.config.mysql.username,
    password: mp.basemode.config.mysql.password,
    database: mp.basemode.config.mysql.databasename,

    debug: false
});

mysql.load = function () {
    terminal.debug('mysql.load();');

    this.getConnection();
};

mysql.getConnection = function () {
    terminal.debug('mysql.getConnection();');

    this.main.getConnection((err, connection) => {
        if (err) {
            terminal.error('[MYSQL]: Основная база данных не смогла создать подключение к серверу.', err);
        } else {
            terminal.done('[MYSQL]: Основная база данных создала подключение к серверу.');
        }
    });
};

mysql.executeQuery = function (query, values, callback) {
    if (!query) {
        return false;
    }

    let preTime = new Date();

    try {
        // terminal.debug(query);
        
        this.main.getConnection((err, connection) => {
            try {
                if (!err) {
                    connection.query(query, values, function (err, rows, fields) {
                        let postTime = new Date();
                        terminal.debug(query, `${postTime - preTime}ms`);
                        
                        try {
                            if (!err) {
                                if(callback) {
                                    callback(null, rows, fields);
                                    return connection.destroy();
                                }
                            } else {
                                terminal.error('[MYSQL]: Произошла неизвестная ошибка. Код ошибки: 7072', err);
                            }
                        } catch (e) {
                            terminal.error(e);
                        }
                    });
                } else {
                    terminal.error('[MYSQL]: Основная база данных не смогла создать подключение к серверу.', err);
                }

                connection.release();
            } catch (e) {
                terminal.error(e);
            }
        });
    } catch (e) {
        terminal.error(e);
    }
};

module.exports = mysql;