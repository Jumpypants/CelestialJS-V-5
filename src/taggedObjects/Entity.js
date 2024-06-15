// Import the SceneObject class
import SceneObject from "./SceneObject.js";
// Import the V2 class
import V2 from "../V2.js";

class Entity extends SceneObject {
  constructor(pos = new V2(0, 0), isRigid = true) {
    // Call the parent constructor
    super(pos, isRigid);
    // Add the "Entity" tag to the entity
    this.addTag("Entity");

    // An array of SceneObjects that are in the Entity
    this.objects = [];
    // Add the objects to the Entity
    for (let object of objects) {
      this.addObject(object);
    }
  }

  get leafObjects() {
    // Create an array to store the leaf objects
    let leafObjects = [];
    // If the objects array is empty, return an array with just the entity
    if (this.objects.length === 0) {
      return [this];
    } else {
      // Iterate over all the objects in the entity
      for (let object of this.objects) {
        // Add the leaf objects of the object to the leaf objects array
        leafObjects.push(...object.leafObjects);
      }
    }
  }

  addObject(object) {
    // Add the object to the scene
    this.objects.push(object);

    // Set the parent of the object to this entity
    object.parent = this;
  }

  tick(dt) {
    // Call the parent tick method
    super.tick(dt);

    // Tick the objects in the entity
    this._tickObjects(dt);
  }

  render(dt, ctx) {
    // Call the parent render method
    super.render(dt, ctx);

    // Render the objects in the entity
    this._renderObjects(dt, ctx);
  }

  _tickObjects(dt) {
    // Sort the objects by priority
    this._sortObjectsByTickPriority();
    
    // Loop through all the objects in the scene
    for (let object of this.objects) {
      // Tick the object
      object.tick(dt);
    }
  }

  _renderObjects(dt, ctx) {
    // Sort the objects by depth
    this._sortObjectsByDepth();
    
    // Loop through all the objects in the scene
    for (let object of this.objects) {
      // Render the object
      object.render(dt, ctx);
    }
  }

  _sortObjectsByDepth() {
    // Sort the objects by depth from highest to lowest
    this.objects.sort((a, b) => b.depth - a.depth);
  }

  _sortObjectsByTickPriority() {
    // Sort the objects by priority from highest to lowest
    this.objects.sort((a, b) => b.tickPriority - a.tickPriority);
  }
}

export default Entity;