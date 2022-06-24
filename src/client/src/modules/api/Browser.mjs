
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
        this.path = path;
        Browser.list.push(this);
    }
}

new Browser('default', '', {
    isDev: true
});

export default Browser;