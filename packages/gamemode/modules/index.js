
// REQUIRES

const mysql = require('./mysql.js');
const terminal = require('./terminal.js');

require('./methods.js');
require('./terminal.js');

// CODE

let modules = {};

modules.loadAll = function() {
    terminal.debug('modules.loadAll();');

    mysql.load();
};

module.exports = modules;