
// IMPORTS

// CODE

class Method {
    static digitFormat(number) {
        return ("0" + number).slice(-2);
    };
    
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    
    static getRealTime() {
        let date = new Date();
        return `${this.digitFormat(date.getHours())}:${this.digitFormat(date.getMinutes())}:${this.digitFormat(date.getSeconds())}`;
    };
    
    static getRealDate() {
        let date = new Date();
        return `${this.digitFormat(date.getDate())}/${this.digitFormat(date.getMonth() + 1)}`;
    };

    static async sleep(ms) {
        return new Promise(res => setTimeout(res, ms));
    }
}

export default Method;