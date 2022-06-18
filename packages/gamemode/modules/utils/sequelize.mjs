
// IMPORTS

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import mysql from 'mysql2';
import { Sequelize } from 'sequelize';
import Terminal from '../terminal.mjs';
import Method from '../methods.mjs';

// CODE

export let sequelize = null;
export const db = [];

class DataBase {
    static Initialization() {
        Terminal.sendDebugDetailed('DataBase.initialization();');
        
        try {
            if(this.hasConnection()) {
                sequelize = new Sequelize({
                    dialect: 'mysql',

                    host: mp.config.database.host,
                    username: mp.config.database.user,
                    password: mp.config.database.password,
                    database: mp.config.database.name,

                    logging: mp.config.database.debug ? console.log : false
                });
            }
        } catch(e) {
            console.log(e);
        }
    }

    static async hasConnection() {
        let status = false;
        let dbStatus = mysql.createPool({
            host: mp.config.database.host,
            user: mp.config.database.user,
            password: mp.config.database.password,
            database: mp.config.database.name
        });

        dbStatus.getConnection((err, connection) => {
            if(!err) {
                connection.query('SHOW TABLES', (err, rows, fields) => {
                    if(!err) {
                        Terminal.sendDone('[Sequlize] Соединение с базой данных успешно');
                        status = true;

                        this.load();
                    }
                });
            } else {
                Terminal.sendError('[Sequelize] При соединении произошла ошибка', err);
            }
        });

        await Method.sleep(100);
        return status;
    }

    static async load() {
        Terminal.sendDebugDetailed('DataBase.load();');

        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        const fullDir = path.join(__dirname, '\\database');

        fs.readdirSync(fullDir).forEach(async (dir) => {
            if(fs.existsSync(`${fullDir}\\${dir}`)) {
                let model = await import(`./database\\${dir}`);
                db[model.default.name] = model.default.handle;
            }
        });
    }
}

export default DataBase;