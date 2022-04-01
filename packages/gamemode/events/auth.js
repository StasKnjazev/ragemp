
// REQUIRES

const mysql = require("../modules/mysql");
const terminal = require("../modules/terminal");
const auth = require("../systems/auth");

// CODE

mp.events.add('server.auth:sendRegister', (player, array_info) => {
    let array = JSON.parse(array_info);

    mysql.executeQuery(`SELECT * FROM \`accounts\` WHERE \`reg_socialClub_serial\` = '${player.serial}'`, (err, rows, fields) => {
        if(!rows[0]) {
            mysql.executeQuery(`SELECT * FROM \`accounts\` WHERE \`email\` = '${array.email}'`, (err, rows, fields) => {
                if(rows[0]) {
                    player.call('client.auth:sendNotify', ['Такая почта уже зарегистрирована, пожалуйста введите другую или войдите в существующий аккаунт']);
                } else {
                    mysql.executeQuery(`SELECT * FROM \`accounts\` WHERE \`username\` = '${array.username}'`, (err, rows, fields) => {
                        if(rows[0]) {
                            player.call('client.auth:sendNotify', ['Имя пользователя занято, придумайте новое или войдите в существующий аккаунт']);
                        } else {
                            mysql.executeQuery(`INSERT INTO \`accounts\` (\`email\`, \`username\`, \`password\`, \`reg_socialClub_id\`, \`reg_socialClub_name\`, \`reg_socialClub_serial\`, \`last_socialClub_serial\`, \`reg_hwid\`, \`last_hwid\`, \`reg_ip\`, \`last_ip\`, \`reg_date\`, \`last_date\`, \`whitelist_password\`) VALUES ('${array.email}', '${array.username}', '${array.password}', '${player.rgscId}', '${player.socialClub}', '${player.serial}', '${player.serial}', 'hwid null', 'hwid null', '${player.ip}', '${player.ip}', 'date null', 'date null', 'whitelist password null')`, (err, rows, fields) => {
                                if(!err) {
                                    //? Спавним игрока и т.д.
                                    auth.loadAccount(player);
                                } else {
                                    terminal.debug(err);
                                }
                            });
                        }
                    });
                }
            });

        } else {
            player.call('client.auth:sendNotify', ['У Вас уже есть аккаунт, войдите в него']);
        }
    });
});

mp.events.add('server.auth:sendLogin', (player, array_info) => {
    let array = JSON.parse(array_info);

    mysql.executeQuery(`SELECT * FROM \`accounts\` WHERE \`reg_socialClub_serial\` = '${player.serial}'`, (err, rows, fields) => {
        if(rows[0]) {
            if(array.password == rows[0].password) {
                auth.loadAccount(player);
            } else {
                player.call('client.auth:sendNotify', ['Введенные Вами данные неверны, попробуйте еще раз']);
            }
        } else {
            player.call('client.auth:sendNotify', ['Введенные Вами данные неверны, попробуйте еще раз']);
        }
    });
});