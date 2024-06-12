// Import the TaggedObject class
import TaggedObject from "./taggedObject";

class Scene extends TaggedObject {
  #game;
  #active;

  constructor(name, objects = [], active = true) {
    // Call the parent constructor
    super();
    // Add the "Scene" tag to the scene
    this.addTag("Scene");

    // A string that holds the name of the scene
    this.name = name;
    // An array of SceneObjects that are in the scene
    this.objects = objects;

    // A pointer to the game that the scene is in (Will be set when the scene is added to a game)
    this.#game = null;
    // A boolean that determines if the scene is active
    this.#active = active;
  }

  set game(game) {
    // Set the game to the game
    this.#game = game;
  }

  tick(dt) {
    this.#tickObjects(dt);
  }

  #tickObjects(dt) {
    // Loop through all the objects in the scene
    for (let object of this.objects) {
      // Tick the object
      object.tick(dt);
    }
  }
};

export default Scene;