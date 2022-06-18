
// IMPORTS

import './events/index.mjs';
import './systems/index.mjs';

import * as modules from './modules/index.mjs';
import { InitServer } from './enums/index.mjs';
import Terminal from './modules/terminal.mjs';

// CODE

function Init() {
    Terminal.sendDebug('Init();');

    InitServer();
    modules.loadAll();
};

setTimeout(Init, 500);