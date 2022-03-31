
// REQUIRES

const mysql = require("../modules/mysql");

// CODE

mp.events.add('server.auth:sendRegister', (player, array_info) => {
    let array = JSON.parse(array_info);

    mysql.executeQuery('SELECT * FROM `accounts` WHERE `reg_socialClub_serial` = ?', [player.serial], (err, rows, fields) => {
        mysql.executeQuery('SELECT * FROM `accounts` WHERE `email` = ?', [array.email], (err, rows, fields) => {
            if(rows[0]) {
                player.call('client.auth:sendNotify', ['Такая почта уже зарегистрирована, пожалуйста введите другую или войдите в существующий аккаунт']);
            } else {
                mysql.executeQuery('SELECT * FROM `accounts` WHERE `username` = ?', [array.username], (err, rows, fields) => {
                    if(rows[0])  {
                        player.call('client.auth:sendNotify', ['Имя пользователя занято, придумайте новое или войдите в существующий аккаунт']);
                    } else {
                        
                    }
                });
            }
        });
    });
});