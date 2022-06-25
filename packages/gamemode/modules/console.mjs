
// IMPORTS

import readline from 'readline';

// CODE

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {;
    let [name, ...args] = input.split(' ');
    mp.events.call(`server.console:${name}`, ...args);
});

// export default rl;
