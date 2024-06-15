// Import the SceneObject class
import SceneObject from "./SceneObject";

class Collider extends SceneObject {
  constructor(pos = new V2(0, 0), isRigid = true) {
    // Call the parent constructor
    super(pos, isRigid);
    // Add the "Hitbox" tag to the collider
    this.addTag("Collider");
  }

  static rectToRectCollision(rect1, rect2){
    // Check if the rectangles overlap
    if (rect1.pos.x + rect1.size.x >= rect2.pos.x &&
      rect1.pos.x <= rect2.pos.x + rect2.size.x &&
      rect1.pos.y + rect1.size.y >= rect2.pos.y &&
      rect1.pos.y <= rect2.pos.y + rect2.size.y) {
      return true;
    } else {
      return false;
    }
  }

  static rectToCircleCollision(rect, circle){
    var distance = rect.pos.subAbs(circle.pos);

    if (distance.x > (rect.size.x/2 + circle.radius)) { return false; }
    if (distance.y > (rect.size.y/2 + circle.radius)) { return false; }

    if (distance.x <= (rect.size.x/2)) { return true; }
    if (distance.y <= (rect.size.y/2)) { return true; }

    var cornerDistance_sq = (distance.x - rect.size.x/2) ** 2 + (distance.y - rect.size.y/2) ** 2;

    return (cornerDistance_sq <= (circle.radius ** 2));
  }

  static circleToCircleCollision(circle1, circle2){
    // Calculate the distance between the circles
    const distance = circle1.pos.sub(circle2.pos).length();

    // Check if the circles overlap
    if (distance <= circle1.radius + circle2.radius) {
      return true;
    } else {
      return false;
    }
  }

  tick(dt) {
    // Call the parent tick method
    super.tick(dt);

    // Check for collisions
    this.#checkCollisions();
  }

  render(dt, ctx) {
    // Call the parent render method
    super.render(dt, ctx);
  }

  #checkCollisions(){
    // Get the leaf objects
    const leafObjects = this.scene.leafObjects;

    // Loop through all the leaf objects
    for (let object of leafObjects) {
      // If the object has the "Collider" tag and is not this object and collides with this object
      if (object.hasTag("Collider") && object !== this && this.#collidesWith(object)) {
        this.#onCollision(object);
      }
    }
  }

  #collidesWith(object){
    // To be overridden in subclasses
  }

  #onCollision(object){
    // To be overridden in subclasses
  }
}

export default Collider;