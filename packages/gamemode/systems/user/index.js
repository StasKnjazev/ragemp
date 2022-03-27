
// REQUIRES

// CODE

let user = {};

user.isAdmin = function(player) {
    return player.getVariable('adminLevel');
}

module.exports = user;