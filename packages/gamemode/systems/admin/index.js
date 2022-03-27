
// REQUIRES

const blips = require("../../world/blips");

// CODE

let admin = {};

admin.blips = {};
admin.blips.reload = function() {
    blips.reload();
};

module.exports = admin;