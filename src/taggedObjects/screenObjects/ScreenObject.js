// Import the TaggedObject class
import TaggedObject from "../TaggedObject.js";
// Import the V2 class
import V2 from "../../V2.js";

class ScreenObject extends TaggedObject {
  constructor(pos = new V2(0, 0), anchor = "center") {
    // Call the parent constructor
    super();
    // Add the "ScreenObject" tag to the screen element
    this.addTag("ScreenObject");

    // A V2 that holds the position of the screen element
    this.pos = pos;
    // The size of the canvas
    this._canvasSize = canvasSize;

    // A string that holds the anchor of the screen element
    this._anchor = anchor;
  }

  set anchor(value) {
    // Set the anchor of the screen element
    this._anchor = value;
  }

  render(dt, ctx) {
    // The render method will be overridden in subclasses
  }

  _translateToAnchor(ctx) {
    // Get the canvas size
    var canvasSize = new V2(ctx.canvas.width, ctx.canvas.height);

    // Get the position to translate to
    var translatePos;
    switch (this._anchor) {
      case "center":
        translatePos = canvasSize.div(2);
        break;
      case "top":
        translatePos = new V2(canvasSize.x / 2, 0);
        break;
      case "bottom":
        translatePos = new V2(canvasSize.x / 2, canvasSize.y);
        break;
      case "left":
        translatePos = new V2(0, canvasSize.y / 2);
        break;
      case "right":
        translatePos = new V2(canvasSize.x, canvasSize.y / 2);
        break;
      case "topLeft":
        translatePos = new V2(0, 0);
        break;
      case "topRight":
        translatePos = new V2(canvasSize.x, 0);
        break;
      case "bottomLeft":
        translatePos = new V2(0, canvasSize.y);
        break;
      case "bottomRight":
        translatePos = canvasSize;
        break;
      default:
        translatePos = canvasSize.div(2);
        break;
    }

    // Translate the context to the anchor
    ctx.translate(translatePos.x, translatePos.y);
  }
}

export default ScreenObject;