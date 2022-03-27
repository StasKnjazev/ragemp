
// REQUIRES

const colors = require('colors');
const methods = require('./methods.js');

// CODE

let terminal = {};

terminal.debug = function(message, ...args) {
    if(mp.basemode.config.debug) {
        return console.log(`${methods.getRealTime()} ${colors.cyan('[DEBUG]')} ${message}`, args);
    }
};

terminal.info = function(message, ...args) {
    return console.log(`${methods.getRealTime()} ${colors.yellow('[INFO]')} ${message}`, args);
};

terminal.done = function(message, ...args) {
    return console.log(`${methods.getRealTime()} ${colors.green('[DONE]')} ${message}`, args);
};

terminal.error = function(message, ...args) {
    return console.log(`${methods.getRealTime()} ${colors.red('[ERROR]')} ${message}`, args);
};

module.exports = terminal;