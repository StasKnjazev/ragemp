
// REQUIRES

const configs = require("../../configs");

// CODE

let vehicles = {};

vehicles.spawn = function(player, model, array_info) {
    if(!model) {
        return player.notify('~r~Вы не указали названия для авто.\n~y~Использование: /veh [name model]');
    }

    let array = array_info;

    if(typeof array_info == String) {
        array = JSON.parse(array_info);
    }

    let vehicle = mp.vehicles.new(model, new mp.Vector3(array.position));
    vehicle.dimension = array.dimension;

    vehicle.setColorRGB(133, 63, 8, 133, 63, 8);

    player.putIntoVehicle(vehicle, configs.driverSeat);
};

module.exports = vehicles;