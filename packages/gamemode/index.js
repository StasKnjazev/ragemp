
// GLOBALS

mp.basemode = {};
mp.basemode.config = require('../../conf-server.json');

// REQUIRES

require('./configs/index.js')
require('./events/index.js');

const modules = require('./modules/index.js');
const systems = require('./systems/index.js');
const world = require('./world/index.js');

const methods = require('./modules/methods');
const terminal = require('./modules/terminal');

// CODE

(function Init() {
    let timeout = setTimeout(() => {
        terminal.debug('Init();');
    
        modules.loadAll();
        systems.loadAll();
        world.loadAll();

        // Очищаем память
        clearTimeout(timeout);
        timeout = null;
    }, methods.transformToSecond(1.5));
})();