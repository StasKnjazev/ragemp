
// IMPORTS

// CODE

class Discord {

}

export class DiscordPresence {
    static title = '';
    static desc = '';

    static start() {
        mp.discord.update(this.title, this.desc);
    }

    static set(title, desc) {
        if(title) this.title = title.toString();
        if(desc) this.desc = desc.toString();
    }
}

//? EVENTS
mp.events.add('render', () => {
    DiscordPresence.start();
});

export default Discord;
