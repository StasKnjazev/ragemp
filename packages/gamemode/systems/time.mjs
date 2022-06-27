
// IMPORTS

import Terminal from "../modules/terminal.mjs";
import { db } from "../modules/utils/sequelize.mjs";

// CODE

let minuteInSeconds = 15;

let dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let monthNames = [];

export class TimeMethods {
    static getLeapYear(number) {
        return !((parseInt(number) % 4) || (!(parseInt(number) % 100) && (parseInt(number) % 400)));
    }

    static getYear() {
        return parseInt(Time.year);
    }

    static getMonth() {
        return parseInt(Time.month);
    }

    static getDay() {
        return parseInt(Time.day);
    }

    static getHour() {
        return parseInt(Time.hour);
    }

    static getMinute() {
        return parseInt(Time.minute);
    }

    // static getSecond() {
    //     return parseInt(Time.second);
    // }

    static getDayName() {
        let date = new Date(parseInt(Time.year), parseInt(Time.month - 1), parseInt(Time.day));
        return dayNames[date.getDay()];
    }
}

class Time {
    static year = null;
    static month = null;
    static day = null;
    static hour = null;
    static minute = null;
    static second = 0;

    static async load() {
        try {
            let time = await db.WorldTime.findOne({
                where: {
                    id: 1
                }
            });
    
            this.year = parseInt(time.year);
            this.month = parseInt(time.month);
            this.day = parseInt(time.day);
            this.hour = parseInt(time.hour);
            this.minute = parseInt(time.minute);
        } catch(e) {
            Terminal.sendError(e);
        }

        setInterval(this.start, minuteInSeconds * 1000 / 60);
    }

    static start() {
        ++Time.second;

        if(Time.second >= 60) {
            Time.second = 0;
            ++Time.minute;
            Time.save();
        }

        if(Time.minute >= 60) {
            Time.minute = 0;
            ++Time.hour;
        }

        if(Time.hour >= 24) {
            Time.hour = 0;
            ++Time.day;
        }

        if(Time.month == 2) { // Февраль
            if(TimeMethods.getLeapYear(Time.year)) { // Высокосный
                if(Time.day > 29) {
                    Time.day = 1;
                    ++Time.month;
                }
            } else { // Не высокосный
                if(Time.day > 28) {
                    Time.day = 1;
                    ++Time.month;
                }
            }
        } else {
            if(Time.month == 1 || Time.month == 3 || Time.month == 5 || Time.month == 7 || Time.month == 8 || Time.month == 10 || Time.month == 12) {
                if(Time.day > 31) {
                    Time.day = 1;
                    ++Time.month;
                }
            } else {
                if(Time.day > 30) {
                    Time.day = 1;
                    ++Time.month;
                }
            }
        }

        if(Time.month > 12) {
            Time.month = 1;
            ++Time.year;
        }

        mp.world.time.set(parseInt(Time.hour), parseInt(Time.minute), parseInt(Time.second));
    }

    static async save() {
        await db.WorldTime.update({
            year: Time.year,
            month: Time.month,
            day: Time.day,
            hour: Time.hour,
            minute: Time.minute
        }, {
            where: {
                id: 1
            }
        });
    }
}

export default Time;