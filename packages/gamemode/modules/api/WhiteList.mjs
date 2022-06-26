
// IMPORTS

import Terminal from "../terminal.mjs";
import { db } from "../utils/sequelize.mjs";

// CODE

class WTL {
    static async loadInDataBase() {
        Terminal.sendDebugDetailed('WhiteList.load();');

        let whitelist = await db.WhiteList.findAll();
        whitelist = await whitelist.map(element => {
            return parseInt(element.socialClubID);
        });

        WhiteList.list = whitelist;
        // Terminal.sendInfo('[WhiteList] List -', WhiteList.list);
    }

    static async getInDataBase(socialClubID) {
        return await db.WhiteList.findOne({
            where: {
                socialClubID
            }
        });
    }

    static async addToDataBase(socialClubID) {
        if(await this.getDataBase(socialClubID) == null) {
            await db.WhiteList.create({
                socialClubID
            });
        }
    }

    static async removeInDataBase(socialClubID) {
        if(await this.getDataBase(socialClubID) != null) {
            await db.WhiteList.destroy({
                where: {
                    socialClubID
                }
            });
        }
    }
}

class WhiteList {
    static list = [];

    static async load() {
        if(mp.config.isWhiteList) await WTL.loadDataBase();
    }

    static async get(socialClubID) {
        return await this.list.find(element => element == socialClubID);
    }

    static async add(socialClubID) {
        let found = await this.get(socialClubID);
        if(found) return Terminal.sendInfo('[WhiteList] Этот SocialClub уже состоит в списке.');

        await WTL.addToDataBase(socialClubID);
        this.list.push(parseInt(socialClubID));

        // console.log(WhiteList.list);
    }

    static async remove(socialClubID) {
        let foundIndex = await this.get(socialClubID);
        if(foundIndex != -1) {
            await WTL.removeInDataBase(socialClubID);
            return this.list.slice(foundIndex, 1);
        }

        Terminal.sendInfo('[WhiteList] Такого SocialClub нет в списке.');
    }
}

mp.events.add('server.console:whitelist', async (name, socialClubID) => {
    if(name == 'add') {
       await WhiteList.add(socialClubID);
    }

    if(name == 'remove') {
        await WhiteList.remove(socialClubID);
     }
});

export default WhiteList;