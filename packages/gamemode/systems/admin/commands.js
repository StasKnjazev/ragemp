
// REQUIRES

const admin = require(".");
const vehicles = require("../vehicles");

// CODE

mp.events.addCommand('blipreload', (player) => {
    admin.blips.reload();
});

mp.events.addCommand('veh', (player, _, model) => {
    vehicles.spawn(player, model, {
        position: player.position,
        dimension: 0
    });
});