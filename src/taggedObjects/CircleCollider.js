// Import the Collider class
import Collider from "./Collider";

class CircleCollider extends Collider {
  constructor(pos = new V2(0, 0), radius = 10, isRigid = true) {
    // Call the parent constructor
    super(pos, isRigid);
    // Add the "CircleCollider" tag to the circle collider
    this.addTag("CircleCollider");

    // A V2 that holds the radius of the circle
    this.radius = radius;
  }

  get circle() {
    // Return the circle
    return {pos: this.globalPos, radius: this.radius};
  }

  _collidesWith(object) {
    if (object.hasTag("RectCollider")) {
      return Collider.rectToCircleCollision(object.rect, this.circle);
    } else if (object.hasTag("CircleCollider")) {
      return Collider.circleToCircleCollision(object.circle, this.circle);
    } else {
      throw new Error("Invalid collider type");
    }
  }
}

export default CircleCollider;