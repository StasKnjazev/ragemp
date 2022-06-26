
// IMPORTS

// CODE

let localPlayer = mp.players.local;

class User {
    static setPosition(x, y, z) {
        localPlayer.position = new mp.Vector3(x, y, z);
    }

    static isDeath() {
        return localPlayer.getHealth() <= 0 ? true : false;
    }

    static getPosition() {
        return localPlayer.position;
    }

    static getHealth() {
        return localPlayer.getHealth();
    }

    static getArmour() {
        return localPlayer.getArmour();
    }

    static getHeading() {
        return localPlayer.getHeading();
    }

    static getAlpha() {
        return localPlayer.getAlpha();
    }

    static setAlpha(number, skin = false) {
        localPlayer.setAlpha(parseInt(number), skin);
    }

    static setHeading(number) {
        localPlayer.setHeading(parseInt(number));
    }

    static setHealth(number) {
        localPlayer.setHealth(parseInt(number));
    }

    /**
        * Возвращает название сиденья ("driver", "frontright", "backleft", "backright") или вернет null если игрок не в автомобиле
    */

    static isVehicle() {
        if(localPlayer.vehicle.getPedInSeat(0)) return 'driver';
        if(localPlayer.vehicle.getPedInSeat(1)) return 'frontright';
        if(localPlayer.vehicle.getPedInSeat(2)) return 'backleft';
        if(localPlayer.vehicle.getPedInSeat(3)) return 'backright';
        return null;
    }
}

export default User;