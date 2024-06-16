// Import the SceneObject class
import SceneObject from "./SceneObject.js";
// Import the V2 class
import V2 from "../../V2.js";

class Sprite extends SceneObject {
  constructor(imageHandler, pos = new V2(0, 0), size = new V2(10, 10), rotation = 0, isRigid = true) {
    // Call the parent constructor
    super(pos, isRigid);
    // Add the "Sprite" tag to the sprite
    this.addTag("Sprite");

    // A V2 that holds the size of the sprite
    this.size = size;
    // A number that holds the rotation of the sprite in radians
    this.rotation = rotation;
    // The image handler
    this.imageHandler = imageHandler;
  }

  render(dt, ctx) {
    // Save the context state
    ctx.save();

    // Rotate the context to the rotation of the sprite
    ctx.rotate(this.rotation);

    // Translate the context to the position of the sprite
    ctx.translate(this.globalPos.x, this.globalPos.y);

    // Call the image handler's render method
    this.imageHandler.render(dt, ctx, this.size);

    // Restore the context state
    ctx.restore();
  }
}

export default Sprite;