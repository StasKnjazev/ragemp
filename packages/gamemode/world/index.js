
// REQUIRES

const terminal = require("../modules/terminal");
const blips = require("./blips");

// CODE

let world = {};

world.loadAll = function() {
    terminal.debug('world.loadAll();');

    blips.load();
};

module.exports = world;