
// IMPORTS

// CODE

let cam = mp.cameras.new('default', new mp.Vector3(1, 1, 1), new mp.Vector3(0, 0, 0), 10);
cam.setActive(true);

mp.game.cam.renderScriptCams(true, false, 0, false, false);

cam.pointAtCoord(1, 1, 1);