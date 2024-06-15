// Import the TaggedObject class
import TaggedObject from "./taggedObject";
// Import the V2 class
import V2 from "../V2";

class SceneObject extends TaggedObject {
  #scene;
  #pos;
  #parent;

  constructor(pos = new V2(0, 0), objects = [], isRigid = true) {
    // Call the parent constructor
    super();
    // Add the "SceneObject" tag to the scene object
    this.addTag("SceneObject");

    // A boolean that determines if when the object is moved, it will move the parent object along with it
    this.isRigid = isRigid;
    // A number that determines the depth of the scene object (Higher depths are rendered first)
    this.depth = 0;
    // A number that determines the priority of the scene object (Higher priorities are updated first)
    this.tickPriority = 0;

    // A V2 that holds the position of the scene object
    this.#pos = pos;
    // A pointer to the scene that the scene object is in (Will be set when the scene object is added to a scene)
    // This will be null unless this is a root scene object
    this.#scene = null;
    // A pointer to the parent scene object of this scene object (Will be set when the scene object is added to a parent scene object)
    // If the scene object is not added to a parent scene object, this will be null
    this.#parent = null;
  }

  get globalPos() {
    // If the scene object has a parent, return the sum of the parent's global position and the position
    if (this.#parent !== null) {
      return this.#parent.globalPos.add(this.#pos);
    } else {
      return this.#pos;
    }
    
  }

  get leafObjects() {
    // Return an array with the scene object
    return [this];
    // Most scene SceneObjects will not have children, so they will return an array with just themselves
    // This will be overridden in SceneObjects that can have children
  }

  get pos() {
    // Return the position of the scene object
    return this.#pos;
  }

  get scene() {
    // If the scene is null, return the parent scene
    if (this.#scene === null) {
      return this.#parent.scene;
    } else {
      return this.#scene;
    }
  }

  get parent() {
    // Return the parent of the scene object
    return this.#parent;
  }

  set parent(parent) {
    // Set the parent to the parent
    this.#parent = parent
  }

  set scene(scene) {
    // Set the scene to the scene
    this.#scene = scene;
  }

  set pos(pos) {
    // Set the position to the position
    this.#pos = pos;
  }

  moveBy(v) {
    // If the scene object is rigid, move the parent object by the vector
    if (this.isRigid) {
      this.#parent.moveBy(v);
    } else {
      this.#pos = this.#pos.translate(v);
    }
  }

  moveToGlobal(v) {
    // If the scene object is rigid
    if (this.isRigid) {
      // Move the parent object by the difference between the new position and the old position
      this.#parent.moveBy(v.sub(this.globalPos));
    } else {
      // Set the position to the new position
      this.#pos = v;
    }
  }

  tick(dt) {
    // To be overridden in subclasses
  }

  render(dt, ctx) {
    // To be overridden in subclasses
  }
}

export default SceneObject;