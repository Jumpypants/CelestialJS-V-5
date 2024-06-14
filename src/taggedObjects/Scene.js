// Import the TaggedObject class
import TaggedObject from "./taggedObject";

class Scene extends TaggedObject {
  #game;
  #active;
  #name;

  constructor(name, objects = [], active = true) {
    // Call the parent constructor
    super();
    // Add the "Scene" tag to the scene
    this.addTag("Scene");

    // An array of SceneObjects that are in the scene
    this.objects = [];
    // Add the objects to the scene
    for (let object of objects) {
      this.addObject(object);
    }

    // A pointer to the game that the scene is in (Will be set when the scene is added to a game)
    this.#game = null;
    // A boolean that determines if the scene is active
    this.#active = active;
    // A string that holds the name of the scene
    this.#name = name;
  }

  get name() {
    // Return the name of the scene
    return this.#name;
  }

  get game() {
    // Return the game
    return this.#game;
  }

  get leafObjects() {
    // Create an array to store the leaf objects
    let leafObjects = [];

    // Loop through all the objects in the scene
    for (let object of this.objects) {
      leafObjects.push(...object.leafObjects); 
    }

    // Return the leaf objects
    return leafObjects;
  }

  set game(game) {
    // Set the game to the game
    this.#game = game;
  }

  addObject(object) {
    // Add the object to the scene
    this.objects.push(object);

    // Set the scene of the object to this scene
    object.scene = this;
  }

  tick(dt) {
    // If the scene is not active, return
    if (!this.#active) {
      return;
    }

    // Tick the objects in the scene
    this.#tickObjects(dt);
  }

  render(dt, ctx) {
    // Loop through all the objects in the scene
    this.#renderObjects(dt, ctx);
  }

  getCameraByName(name) {
    // Get the leaf objects
    var leafObjects = this.leafObjects;

    // Loop through all the leaf objects
    for (let object of leafObjects) {
      // If the object is a camera and the name matches, return the camera
      if (object.hasTag("Camera") && object.name === name) {
        return object;
      }
    }

    // If the camera was not found, return null
    return null;
  }

  activate() {
    // Set the active flag to true
    this.#active = true;
  }

  deactivate() {
    // Set the active flag to false
    this.#active = false;
  }

  #tickObjects(dt) {
    // Sort the objects by priority
    this.#sortObjectsByPriority();

    // Loop through all the objects in the scene
    for (let object of this.objects) {
      // Tick the object
      object.tick(dt);
    }
  }

  #renderObjects(dt, ctx) {
    // Sort the objects by depth
    this.#sortObjectsByDepth();
    
    // Loop through all the objects in the scene
    for (let object of this.objects) {
      // Render the object
      object.render(dt, ctx);
    }
  }

  #sortObjectsByDepth() {
    // Sort the objects by depth from highest to lowest
    this.objects.sort((a, b) => b.depth - a.depth);
  }

  #sortObjectsByPriority() {
    // Sort the objects by priority from highest to lowest
    this.objects.sort((a, b) => b.priority - a.priority);
  }
};

export default Scene;