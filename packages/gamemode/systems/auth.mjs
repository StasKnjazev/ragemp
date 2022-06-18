
// IMPORTS

import { db } from "../modules/utils/sequelize.mjs";

// CODE

class Auth {
    static async getAccountInDataBase(socialClubID) {
        return await db.Accounts.findOne({
            where: {
                regSocialClubID: socialClubID
            }
        });
    }

    static async getAccountInDataBaseByID(id) {
        return await db.Accounts.findOne({
            where: {
                id: id
            }
        });
    }

    static async getAccountInDataBaseByUsername(username) {
        return await db.Accounts.findOne({
            where: {
                username: username
            }
        });
    }

    static async getAccountInDataBaseByEmail(email) {
        return await db.Accounts.findOne({
            where: {
                email: email
            }
        });
    }

    static async hasEmailRegistered(email) {
        let found = await db.Accounts.findOne({
            where: {
                email
            }
        });

        return !!found;
    }

    static async hasUsernameRegistered(username) {
        let found = await db.Accounts.findOne({
            where: {
                username
            }
        });

        return !!found;
    }

    static async createAccount(options) {
        if(await this.getAccountInDataBase(options.regSocialClubID)) return false;

        await db.Accounts.create({
            email: options.email,
            username: options.username,
            password: options.password,
            regSocialClubID: Number(options.regSocialClubID),
            regSocialClubName: options.regSocialClubName,
            hwSerial: options.hwSerial,
            regIP: options.regIP,
            lastIP: options.lastIP,
            regDate: Number(options.regDate),
            lastDate: Number(options.lastDate)
        });
        
        return true;
    }

    static async deleteAccount(socialClubID) {
        if(await this.getAccountInDataBase(socialClubID)) {
            await db.Accounts.destroy({
                where: {
                    regSocialClubID: socialClubID
                }
            });

            return true;
        }
        
        return false;
    }
}

export default Auth;