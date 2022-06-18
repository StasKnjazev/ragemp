
// IMPORTS

import './api/index.mjs';
import './utils/index.mjs';
import './methods.mjs';

import Terminal from './terminal.mjs';
import DataBase from './utils/sequelize.mjs';

export function loadAll() {
    Terminal.sendDebug('[Modules] loadAll();');

    DataBase.Initialization();
}