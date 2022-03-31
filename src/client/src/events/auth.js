
// IMPORTS

// CODE

mp.events.add('client.auth:sendRegister', (array) => {
    mp.events.callRemote('server.auth:sendRegister', array);
});