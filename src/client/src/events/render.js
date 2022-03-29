
// IMPORTS

import discord from '../systems/discord/index.js';
import stamina from '../systems/player/stamina.js';
import client from '../modules/client.js';

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

    mp.game.invoke('0xF314CF4F0211894E', 143, client.hudColor.r, client.hudColor.g, client.hudColor.b, 255);
    mp.game.invoke('0xF314CF4F0211894E', 116, client.hudColor.r, client.hudColor.g, client.hudColor.b, 255);
    mp.game.gxt.set('PM_PAUSE_HDR', client.serverName);

    mp.game.graphics.beginScaleformMovieMethodOnFrontend("SET_HEADING_DETAILS");
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(client.firstLineText);
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(client.secondLineText);
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(client.thirdLineText);
    mp.game.graphics.scaleformMovieMethodAddParamBool(false);
    mp.game.graphics.endScaleformMovieMethod();
});