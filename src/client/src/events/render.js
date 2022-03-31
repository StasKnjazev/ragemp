
// IMPORTS

const discord = require('../systems/discord/index.js');

// CODE

mp.events.add('render', () => {
    mp.discord.update(discord.name, discord.desc);

    mp.game.ui.hideHudComponentThisFrame(1);
    mp.game.ui.hideHudComponentThisFrame(2);
    mp.game.ui.hideHudComponentThisFrame(3);
    mp.game.ui.hideHudComponentThisFrame(4);
    mp.game.ui.hideHudComponentThisFrame(6);
    mp.game.ui.hideHudComponentThisFrame(7);
    mp.game.ui.hideHudComponentThisFrame(8);
    mp.game.ui.hideHudComponentThisFrame(9);
    mp.game.ui.hideHudComponentThisFrame(13);
    mp.game.ui.hideHudComponentThisFrame(17);
    mp.game.ui.hideHudComponentThisFrame(20);
});