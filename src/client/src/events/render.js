
// IMPORTS

import discord from '../systems/discord/index.js';
import stamina from '../systems/player/stamina.js';

// CODE

mp.events.add('render', () => {
    mp.discord.update(discord.name, discord.desc);
});