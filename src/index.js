// Create the library object
const CLS = {};

// Import the V2 class
import V2 from "./V2";
CLS.V2 = V2;

// Import the Game class
import Game from "./Game";
CLS.Game = Game;

// Import the TaggedObject class
import TaggedObject from "./taggedObjects/taggedObject";
CLS.TaggedObject = TaggedObject;

// Import the Scene class
import Scene from "./taggedObjects/Scene";
CLS.Scene = Scene;

module.exports = CLS;