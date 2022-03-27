
// IMPORTS

import discord from '../systems/discord/index.js';

// CODE

mp.events.add('render', () => {
    mp.discord.update(discord.name, discord.desc);
});