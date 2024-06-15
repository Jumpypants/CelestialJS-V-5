// Import the Collider class
import Collider from "./Collider.js";
// Import the V2 class
import V2 from "../V2.js";

class RectCollider extends Collider {
  constructor(pos = new V2(0, 0), size = new V2(0, 0), isRigid = true) {
    // Call the parent constructor
    super(pos, isRigid);
    // Add the "RectCollider" tag to the rect collider
    this.addTag("RectCollider");

    // A V2 that holds the size of the rectangle
    this.size = size;
  }

  get rect() {
    // Return the rectangle
    return {pos: this.globalPos, size: this.size};
  }

  _collidesWith(object) {
    if (object.hasTag("RectCollider")) {
      return Collider.rectToRectCollision(this.rect, object.rect);
    } else if (object.hasTag("CircleCollider")) {
      return Collider.rectToCircleCollision(this.rect, object.circle);
    } else {
      throw new Error("Invalid collider type");
    }
  }
}

export default RectCollider;