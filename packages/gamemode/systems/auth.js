
// REQUIRES

const mysql = require("../modules/mysql");
const terminal = require("../modules/terminal");

// CODE

let auth = {};

auth.loadAccount = function(player) {
    mysql.executeQuery(`SELECT * FROM \`accounts\` WHERE \`reg_socialClub_serial\` = '${player.serial}'`, (err, rows, fields) => {
        if(rows[0]) {
            player.setVariable('account_email', `${rows[0].email}`);
            player.setVariable('account_username', `${rows[0].username}`);

            player.setVariable('account_scId', `${rows[0].reg_socialClub_id}`);
            player.setVariable('account_scname', `${rows[0].reg_socialClub_name}`);
            player.setVariable('account_scserial', `${rows[0].reg_socialClub_serial}`);

            player.setVariable('account_regip', `${rows[0].reg_ip}`);
            player.setVariable('account_lastip', `${rows[0].last_ip}`);

            player.setVariable('account_regdate', `${rows[0].reg_date}`);

            player.setVariable('account_whitelist', `${rows[0].isWhiteList}`);
            player.setVariable('account_whitelistpass', `${rows[0].whitelist_password}`);
            player.setVariable('account_blacklist', `${rows[0].isBlackList}`);

            //? Запрос на клиент
            player.call('client.auth:close');

            player.dimension = 0;
            player.spawn(new mp.Vector3(0, 0, 71));
            player.heading = 0;
        } else {
            terminal.debug(`${player.name} (${player.socialClub}): Произошла ошибка с загрузкой аккаунта.`);
        }
    });
};

module.exports = auth;