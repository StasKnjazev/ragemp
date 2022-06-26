
// IMPORTS

// CODE

export let mainBrowser = null;

class Browser {
    static list = [];

    static getByName(name) {
        return this.list.find(element => element.name == name);
    }

    // CONSTRUCTOR
    #handle;

    constructor(name, path, { isDev = false } = {}) {
        if(isDev) path = 'http://localhost:22008/';

        this.#handle = mp.browsers.new(String(path));
        this.#handle.active = false;

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

    set active(state) {
        this.#handle.active = state;
    }

    get active() {
        return this.#handle.active;
    }
}

//? EVENTS
mp.events.add('client.browser:create', (path, dev) => {
    mainBrowser = new Browser('default', path, {
        isDev: Boolean(dev)
    });
    mainBrowser.active = true;

    mp.console.logInfo(Browser.getByName('default'));
});

export default Browser;