
// IMPORTS

// CODE

class Browser {
    static list = [];

    // CONSTRUCTOR
    #handle;

    constructor(name, path, { isDev = false } = {}) {
        if(isDev) path = 'http://localhost:8080/';

        this.#handle = mp.browsers.new(path.toString());
        this.#handle.active = true;

        this.name = name;
        Browser.list.push(this);
    }

    reload() {
        this.#handle.reload();
    }

    call(nameEvent, ...args) {
        this.#handle.call(nameEvent.toString(), ...args);
    }

    execute(code) {
        this.#handle.execute(code.toString());
    }

    get path() {
        return this.#handle.url;
    }

    set path(url) {
        this.#handle.url = url.toString();
    }
}

export let mainBrowser = new Browser('default', '', {
    isDev: true
});

//? EVENTS

export default Browser;