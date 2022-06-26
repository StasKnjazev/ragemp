
// IMPORTS

// CODE

let prevCamera = null;
export let activeCamera = null;
let nextCamera = null;

class Camera {
    static list = [];

    // CONSTRUCTOR
    #handle;

    constructor(name = 'default', position, rotation, { fov = 45 } = {}) {
        this.name = name;

        this.#handle = mp.cameras.new(this.name, position, rotation, fov);
        this.setActive(true);
    }

    setRenderScriptCams(render = true, ease = false, easeTime = 0, p3 = false, p4 = false, p5 = undefined) {
        mp.game.cam.renderScriptCams(render, ease, parseInt(easeTime), p3, p4, p5);
    }

    setPointAtCoord(x, y, z) {
        this.#handle.pointAtCoord(parseInt(x), parseInt(y), parseInt(z));
    }

    setActive(status) {
        this.#handle.setActive(status);
    }
}

export default Camera;