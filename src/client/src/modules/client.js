
// IMPORTS

const cameras = require('./cameras.js');

// CODE

let client = exports;

client.player = mp.players.local;

client.isBlockControlsPlayer = true;
client.cursor = true;
client.cursorBlockControlsPlayer = true;

client.serverName = 'Basic Mode (by aspid#1660)';
client.hudColor = { r: 36, g: 114, b: 123 };
client.waypointColor = { r: 36, g: 114, b: 123 };

client.firstLineText = `${mp.players.local.name}`;
client.secondLineText = 'Basic Mode';
client.thirdLineText = 'by aspid#1660';

client.load = function() {
    this.player.setConfigFlag(35, false);

    this.player.position = new mp.Vector3(-1838.947509765625, 409.6899108886719, 150.29010009765625);
    this.player.freezePosition(true);

    cameras.new('default', new mp.Vector3(-1838.947509765625, 409.6899108886719, 140.29010009765625), new mp.Vector3(0, 0, 0), new mp.Vector3(-1796.988525390625, 422.12371826171875, 133.60458374023438), 45);
    cameras.shake('DRUNK_SHAKE', 0.15);

    mp.events.add('render', () => {
        mp.game.invoke('0xF314CF4F0211894E', 143, this.hudColor.r, this.hudColor.g, this.hudColor.b, 255);
        mp.game.invoke('0xF314CF4F0211894E', 116, this.hudColor.r, this.hudColor.g, this.hudColor.b, 255);
        mp.game.gxt.set('PM_PAUSE_HDR', this.serverName);

        mp.game.graphics.beginScaleformMovieMethodOnFrontend("SET_HEADING_DETAILS");
        mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(this.firstLineText);
        mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(this.secondLineText);
        mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(this.thirdLineText);
        mp.game.graphics.scaleformMovieMethodAddParamBool(false);
        mp.game.graphics.endScaleformMovieMethod();

        if(this.isBlockControlsPlayer == true) {
            mp.game.controls.disableAllControlActions(0);
        }

        mp.gui.cursor.show(this.cursor, this.cursorBlockControlsPlayer);
    });

    mp.game.ui.setHudColour(142, this.waypointColor.r, this.waypointColor.g, this.waypointColor.b, 255);

    setTimeout(() => {
        mp.game.ui.displayRadar(false);
        mp.gui.chat.activate(false);
        mp.gui.chat.show(false);
    }, 100);
};

client.load();