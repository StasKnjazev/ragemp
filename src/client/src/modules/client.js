
// REQUIRES

// CODE

let client = exports;

client.serverName = 'Basic Mode (by aspid#1660)';
client.hudColor = { r: 36, g: 114, b: 123 };
client.waypointColor = { r: 36, g: 114, b: 123 };

client.firstLineText = `${mp.players.local.name}`;
client.secondLineText = 'Basic Mode';
client.thirdLineText = 'by aspid#1660';

client.load = function() {
    mp.game.ui.setHudColour(142, this.waypointColor.r, this.waypointColor.g, this.waypointColor.b, 255);
};

client.load();