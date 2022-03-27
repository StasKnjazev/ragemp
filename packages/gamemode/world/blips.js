
// REQUIRES

const methods = require("../modules/methods");
const mysql = require("../modules/mysql");
const terminal = require("../modules/terminal");

// CODE

let blips = {};

blips.list = [];

blips.load = function() {
    terminal.debug('blips.load();');

    mysql.executeQuery('SELECT * FROM `blips`', (err, rows, fields) => {
        if(rows) {
            rows.forEach(blip => {
                let position = JSON.parse(blip.position);
                let array = {
                    sprite: blip.sprite,
                    position: new mp.Vector3(position.x, position.y, position.z),
                    name: blip.name,
                    scale: blip.scale,
                    color: blip.color,
                    alpha: blip.alpha,
                    drawDistance: blip.drawDistance,
                    shortRange: blip.shortRange,
                    rotation: blip.rotation,
                    dimension: blip.dimension,
                    radius: blip.radius
                };

                this.list.push(array);
            });

            this.spawnInList();
        }
    });
};

blips.spawnInList = function() {
    terminal.debug('blips.spawnInList();');

    this.list.forEach(blip => {
        mp.blips.new(blip.sprite, blip.position, {
            name: blip.name,
            scale: blip.scale,
            color: blip.color,
            alpha: blip.alpha,
            drawDistance: blip.drawDistance,
            shortRange: blip.shortRange,
            rotation: blip.rotation,
            dimension: blip.dimension,
            radius: blip.radius
        });
    });
};

blips.removeAll = function() {
    terminal.debug('blips.removeAll();');

    this.list = [];
    mp.blips.forEach(blip => {
        blip.destroy();
    });
};

blips.reload = function() {
    this.removeAll();

    let timeout = setTimeout(() => {
        this.load();

        // Очищаем память
        clearTimeout(timeout);
        timeout = null;
    }, 100);
}

module.exports = blips;