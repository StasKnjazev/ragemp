
// IMPORTS

// CODE

class User {
    static list = [];

    static getByID(id) {
        return this.list.find(element => element.id == id);
    }

    static get(player) {
        return this.getByID(player.id);
    }

    static setHealth(player, health = 1) {
        player.health = parseInt(health);
    }

    static setArmour(player, number = 1) {
        player.setArmour(parseInt(number));
    }

    // CONSTRUCTOR
    #handle;
    #loggined = false;

    constructor(handle, { id = null, name, email } = {}) {
        this.#loggined = true;

        this.#handle = handle;
        this.#handle.name = name;

        this.id = this.#handle.id;
        if(id != null) this.id = id;
        this.email = email;

        User.list.push(this);
    }

    get name() {
        return this.#handle.name;
    }

    set name(name) {
        this.#handle.name = name;
    }

    get ip() {
        return this.#handle.ip;
    }

    isLoggined() {
        return this.#loggined;
    }

    set position(pos) {
        this.#handle.position = new mp.Vector3(pos.x, pos.y, pos.z);
    }
    
    get position() {
        return this.#handle.position;
    }
}

//?! TEST
mp.events.add('server.console:getUser', (id) => {
    let user = User.getByID(id);
    console.log(user.name);
});

export default User;