
// IMPORTS

import './events/index.mjs';

import * as modules from './modules/index.mjs';
import * as systems from './systems/index.mjs';
import { InitServer } from './enums/index.mjs';
import Terminal from './modules/terminal.mjs';

// CODE

function Init() {
    Terminal.sendDebug('Init();');

    InitServer();
    modules.loadAll();
    systems.loadAll();
    
};

setTimeout(Init, 500);