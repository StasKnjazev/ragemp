
// IMPORTS

// CODE

let stamina = exports;

stamina.set = function(number) {
    mp.game.player.restoreStamina(number);
}

stamina.reset = function() {
    mp.game.player.resetStamina();
}