"use strict";

// IMPORTS

import './events/index.js';
import modules from './modules/index.js';
import systems from './systems/index.js';
import world from './world/index.js';

// CODE

global.browser = mp.browsers.new('http://package/cef/index.html');
global.browser.active = true;
