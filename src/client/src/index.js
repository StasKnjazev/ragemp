
// IMPORTS

require('./events/index.js');
const modules = require('./modules/index.js');
const systems = require('./systems/index.js');
const world = require('./world/index.js');

// CODE

global.browser = mp.browsers.new('http://localhost:8080/'); // package://cef/index.html
global.browser.active = true;