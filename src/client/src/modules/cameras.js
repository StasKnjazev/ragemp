
// REQUIRES

// CODE

let cameras = exports;

cameras.camera = null;
cameras.camera2 = null;

cameras.new = (name = 'default', position, rotation, pointAtCoord, fov) => {
    if(this.camera != null) {
        this.camera.destroy();
        this.camera = null;
    }

    this.camera = mp.cameras.new(name, position, rotation, fov);
    this.camera.pointAtCoord(pointAtCoord.x, pointAtCoord.y, pointAtCoord.z);
    this.camera.setActive(true);
    this.renderScriptCams();
};

cameras.setActiveWithInterp = (newCamera, duration, easeLocation = 0, easeRotation = 0) => {
    if(this.camera2 != null) {
        this.camera2.destroy();
        this.camera2 = null;
    }

    this.camera2 = mp.cameras.new(newCamera.name, newCamera.position, newCamera.rotation, newCamera.fov);
    this.camera2.pointAtCoord(newCamera.pointAtCoord.x, newCamera.pointAtCoord.y, newCamera.pointAtCoord.z);
    this.camera2.setActiveWithInterp(this.camera.handle, duration * 1000, easeLocation, easeRotation);
    return this.renderScriptCams();
};

cameras.renderScriptCams = (render = true, ease = false, easeTime = 0, p3 = true, p4 = false) => {
    return mp.game.cam.renderScriptCams(render, ease, easeTime, p3, p4);
};

cameras.destroy = () => {
    if(this.camera != null) {
        this.camera.destroy();
        this.camera = null;
    }

    if(this.camera2 != null) {
        this.camera2.destroy();
        this.camera2 = null;
    }
};

cameras.shake = function(type, amplitude) {
    this.camera.shake(type, amplitude);
};

cameras.setMotionBlurStrength = (strength) => {
    this.camera.setMotionBlurStrength(strength);
}