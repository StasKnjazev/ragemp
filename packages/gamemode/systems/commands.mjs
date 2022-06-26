
// IMPORTS

import User from "../modules/api/User.mjs";
import Auth from "./auth.mjs";

// CODE

mp.events.addCommand('reg', async (player, _, email, username, password, rpassword) => {
    if(await Auth.getAccountInDataBase(player.rgscId)) return player.notify('~r~У Вас уже есть аккаунта, войдите в него [/login]');
    if(password != rpassword) return player.notify('~r~Пароли не совпадают');

    await Auth.createAccount({
        email,
        username,
        password,
        regSocialClubID: player.rgscId,
        regSocialClubName: player.socialClub,
        hwSerial: player.serial,
        regIP: player.ip,
        lastIP: player.ip,
        regDate: 5,
        lastDate: 5
    });

    return player.notify(`~g~Вы создали аккаунт, ${username}`);
});

mp.events.addCommand('login', async (player, _, username, password) => {
    let account = await Auth.getAccountInDataBase(player.rgscId);

    if(account) {
        if(await Auth.hasUsernameRegistered(username) == false) return player.notify('~r~Аккаунт с таким логином не существует');
    } else {
        player.notify('~g~Аккаунта с ваши идентификатором не существует, создайте его [/reg]');
    }
});

mp.events.addCommand('veh', (player, model) => {
    let vehicle = mp.vehicles.new(mp.joaat(model), new mp.Vector3(player.position.x, player.position.y, player.position.z));
    player.putIntoVehicle(vehicle, 0);
});

mp.events.addCommand('health', (player, number) => {
    User.setHealth(player, number);
});

mp.events.addCommand('armor', (player, number) => {
    User.setArmour(player, number);
});