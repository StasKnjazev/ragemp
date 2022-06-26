
// IMPORTS

import Terminal from "../modules/terminal.mjs";
import { db } from "../modules/utils/sequelize.mjs";

// CODE

let minuteInSeconds = 15;

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

        mp.world.time.set(parseInt(Time.hour), parseInt(Time.minute), parseInt(Time.second));
        // console.log(Time.hour, Time.minute, Time.second);
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