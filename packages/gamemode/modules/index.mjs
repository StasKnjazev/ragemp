
// IMPORTS

import './api/index.mjs';
import './utils/index.mjs';
import './methods.mjs';
import './console.mjs';

import Terminal from './terminal.mjs';
import DataBase from './utils/sequelize.mjs';
import WhiteList from './api/WhiteList.mjs';
import Method from './methods.mjs';

export async function loadAll() {
    Terminal.sendDebug('[Modules] loadAll();');

    DataBase.Initialization();
    
    await Method.sleep(300);
    WhiteList.load();
}