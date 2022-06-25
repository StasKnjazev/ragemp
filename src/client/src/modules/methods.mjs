
// IMPORTS

// CODE

class Methods {
    static sendNative(name, ...args) {
        mp.game.invoke(name, ...args);
    }
}

export default Methods;