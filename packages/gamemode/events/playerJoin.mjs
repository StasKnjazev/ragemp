
// IMPORTS

import WhiteList from "../modules/api/WhiteList.mjs";

// CODE

mp.events.add('playerJoin', async (player) => {
    player.model = mp.joaat('mp_m_freemode_01');

    //! Доработать
    if(mp.config.isWhiteList) {
        if(await WhiteList.get(player.rgscId)) {
            console.log('Доступ разрешен!');
        } else {
            return player.kick('У Вас нет доступа к серверу');
        }
    }
});
