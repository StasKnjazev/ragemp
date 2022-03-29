
// REQUIRES

const mysql = require("../modules/mysql");

// CODE

mp.events.add('playerJoin', (player) => {
    player.dimension = 10000 + player.id;
    player.spawn(new mp.Vector3(0, 0, 71));
    player.model = mp.joaat('mp_m_freemode_01');
});