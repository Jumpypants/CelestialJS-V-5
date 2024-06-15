// Create the library object
const CLS = {};

// Import the V2 class
import V2 from "./V2.js";
CLS.V2 = V2;

// Import the Game class
import Game from "./Game.js";
CLS.Game = Game;

// Import the TaggedObject class
import TaggedObject from "./TaggedObject.js";
CLS.TaggedObject = TaggedObject;

// Import the Scene class
import Scene from "./taggedObjects/Scene.js";
CLS.Scene = Scene;

// Import the SceneObject class
import SceneObject from "./taggedObjects/SceneObject.js";
CLS.SceneObject = SceneObject;

// Import the Entity class
import Entity from "./taggedObjects/Entity.js";
CLS.Entity = Entity;

// Import the Collider class
import Collider from "./taggedObjects/Collider.js";
CLS.Collider = Collider;

// Import the RectCollider class
import RectCollider from "./taggedObjects/sceneObjects/colliders/RectCollider.js";
CLS.RectCollider = RectCollider;

// Import the CircleCollider class
import CircleCollider from "./taggedObjects/sceneObjects/colliders/CircleCollider.js";
CLS.CircleCollider = CircleCollider;

export default CLS;