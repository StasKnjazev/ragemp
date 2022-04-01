
// REQUIRES

const client = require('../modules/client.js');

// CODE

mp.events.add('client.auth:sendRegister', (array) => {
    mp.events.callRemote('server.auth:sendRegister', array);
});

mp.events.add('client.auth:sendLogin', (array) => {
    mp.events.callRemote('server.auth:sendLogin', array);
});

mp.events.add('client.auth:sendNotify', (text) => {
    global.browser.execute(`app.$children[0].sendNotify('${text}');`);
});

mp.events.add('client.auth:close', () => {
    global.browser.execute(`app.$children[0].visible = false;`);
    client.close();
});