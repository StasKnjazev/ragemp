
// REQUIRES

// CODE

let user = {};

user.isAdmin = function(player) {
    return player.getVariable('adminLevel');
};

user.setAdmin = function(player, level) {
    return player.getVariable('adminLevel', Number(level));
};

user.removeAdmin = function(player) {
    return player.setVariable('adminLevel', false);
};

module.exports = user;