
// IMPORTS

import Terminal from '../modules/terminal.mjs';
import Time from './time.mjs';

import './commands.mjs';
import Method from '../modules/methods.mjs';

// CODE

export async function loadAll() {
    Terminal.sendDebug('[Systems] loadAll();');

    await Method.sleep(300);
    Time.load();
}