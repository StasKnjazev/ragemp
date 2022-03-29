
// REQUIRES

const mysql = require("../modules/mysql");

// CODE

mp.events.add('playerJoin', (player) => {
    player.dimension = 10000 + player.id;
    player.model = mp.joaat('mp_m_freemode_01');
});