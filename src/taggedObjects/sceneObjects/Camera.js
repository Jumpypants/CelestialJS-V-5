// Import the SceneObject class
import SceneObject from "./SceneObject.js";
// Import the V2 class
import V2 from "../V2.js";

class Camera extends SceneObject {
  constructor(name, pos = new V2(0, 0), fov = 100, isRigid = true) {
    // Call the parent constructor
    super(pos, isRigid);
    // Add the "Camera" tag to the camera
    this.addTag("Camera");

    // A string that holds the name of the camera
    this.name = name;
    // A number that holds the field of view of the camera in scene units
    this.fov = fov;
  }
}

export default Camera;