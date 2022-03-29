
// IMPORTS

// CODE

let tick = exports;

tick.getInterval = function(type, number) {
    if(type) {
        switch(type) {
            case 'sec': {
                return number * 1000;
            }

            case 'min': {
                return number * 60000;
            }

            case 'hour': {
                return ((number * 60000) * 3600) * 1000;
            }
            
            default: {
                break;
            }
        }
    }

};

tick.ms1 = function() {

};

tick.s1 = function() {

};

tick.s2 = function() {

};

tick.s5 = function() {

};

tick.s10 = function() {

};

tick.s20 = function() {
    mp.game.invoke('0x9E4CFFF989258472');
    mp.game.invoke('0xF4F2C0D4EE209E20');
};

tick.s30 = function() {

};

tick.m1 = function() {

};

tick.m2 = function() {

};

tick.m5 = function() {

};

tick.m10 = function() {

};

tick.m15 = function() {

};

tick.m30 = function() {

};

tick.m45 = function() {

};

tick.h1 = function() {

};

tick.h3 = function() {

};

tick.h6 = function() {

};

tick.h12 = function() {

};

tick.startTick = function() {
    setInterval(() => {
        this.ms1();
    }, 1);

    setInterval(() => {
        this.s1();
    }, this.getInterval('sec', 1));

    setInterval(() => {
        this.s2();
    }, this.getInterval('sec', 2));

    setInterval(() => {
        this.s5();
    }, this.getInterval('sec', 5));

    setInterval(() => {
        this.s10();
    }, this.getInterval('sec', 10));

    setInterval(() => {
        this.s20();
    }, this.getInterval('sec', 20));

    setInterval(() => {
        this.s30();
    }, this.getInterval('sec', 30));

    setInterval(() => {
        this.m1();
    }, this.getInterval('min', 1));

    setInterval(() => {
        this.m2();
    }, this.getInterval('min', 2));

    setInterval(() => {
        this.m5();
    }, this.getInterval('min', 5));

    setInterval(() => {
        this.m10();
    }, this.getInterval('min', 10));

    setInterval(() => {
        this.m15();
    }, this.getInterval('min', 15));

    setInterval(() => {
        this.m30();
    }, this.getInterval('min', 30));

    setInterval(() => {
        this.m45();
    }, this.getInterval('min', 45));

    setInterval(() => {
        this.h1();
    }, this.getInterval('hour', 1));

    setInterval(() => {
        this.h3();
    }, this.getInterval('hour', 3));

    setInterval(() => {
        this.h6();
    }, this.getInterval('hour', 6));

    setInterval(() => {
        this.h12();
    }, this.getInterval('hour', 12));
};

tick.startTick();