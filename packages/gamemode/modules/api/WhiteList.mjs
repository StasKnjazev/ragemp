
// IMPORTS

import Terminal from "../terminal.mjs";

// CODE

class WhiteList {
    static list = [];

    static add(socialClubID) {
        let found = this.list.find(element => element == socialClubID);
        if(found) return Terminal.sendInfo('[WhiteList] Этот SocialClub уже состоит в списке.');

        this.list.push(socialClubID);
    }

    static remove(socialClubID) {
        let foundIndex = this.list.findIndex(element => element == socialClubID);
        if(foundIndex != -1) return this.list.slice(foundIndex, 1);

        Terminal.sendInfo('[WhiteList] Такого SocialClub нет в списке.');
    }
}

export default WhiteList;