
// REQUIRES

// CODE

let methods = {};

methods.digitFormat = function(number) {
    return ("0" + number).slice(-2);
};

methods.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

methods.getRandomFloat = function () {
    return methods.getRandomInt(0, 10000) / 10000;
};

methods.getRealTime = function() {
    let date = new Date();
    return `${this.digitFormat(date.getHours())}:${this.digitFormat(date.getMinutes())}:${this.digitFormat(date.getSeconds())}`;
};

methods.transformToSecond = function(number) {
    return Number(number * 1000);
}

module.exports = methods;