
// IMPORTS

import colors from 'colors';
import Method from "../modules/methods.mjs";
import Terminal from "../modules/terminal.mjs";

// CODE

class Enums {

}

export function InitServer() {
    Terminal.sendDebugDetailed('InitServer();');
    
    console.log(`${colors.cyan(`
[=======================================================]
||   ${mp.config.dev ? '\n||   THE SERVER WAS STARTED IN DEVELOPMENT MODE\n||'.cyan : mp.config.test ? '\n||   ' + 'SERVER IS RUNNING IN TEST MODE! \n||'.yellow : '\n||   ' + 'THE SERVER WAS STARTED IN PRODUCTION MODE\n||'.grey}
||   debug                     ${`${mp.config.debug}`.white}
||   debugDetailed             ${`${mp.config.debugDetailed}`.white}
||
||   isTest                    ${`${mp.config.isTest}`.white}
||
||   ${`BASIC ROLE PLAY MODE by aspid#1660`.white}
||   ${`SERVER STARTED AT ${Method.getRealDate()} ${Method.getRealTime()}`.grey}
||
[=======================================================]
    `)}`);
}

export default Enums;