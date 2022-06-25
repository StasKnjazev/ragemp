
// IMPORTS

import Methods from "../modules/methods.mjs"

// CODE

let natives = {
    WAIT: '0x4EDE34FBADD967A6'
}

// FUNCTIONS
export function wait(ms) {
    Methods.sendNative(natives.WAIT, parseInt(ms));
}
