// Import the ScreenObject class
import ScreenObject from "./ScreenObject.js";
// Import the V2 class
import V2 from "../../V2.js";

class DisplayElement extends ScreenObject {
  constructor(sceneName, cameraName, pos = new V2(0, 0), size = new V2(1, 1), sizeType = "fraction", anchor = "center") {
    // Call the parent constructor
    super(pos, anchor);
    // Add the "DisplayElement" tag to the display element
    this.addTag("DisplayElement");

    // A pointer to the scene that is being displayed
    this._scene = this.screen.game.scenes.get(sceneName);
    // A pointer to the camera to use for rendering
    this._camera = this._scene.getCameraByName(cameraName);
    // A V2 that holds the size of the display element
    this._size = size;
    // A string that holds the size type of the display element
    this._sizeType = sizeType;
  }

  render(dt, ctx) {
    // Save the context state
    ctx.save();

    // Translate the context based on the anchor
    this._translateToAnchor(ctx);

    // Translate the context to the position of the screen element
    ctx.translate(this.pos.x, this.pos.y);

    // Get the size of the display in pixels
    var displaySize = this._getSizeInPixels(ctx);

    // Clip the context to the display size
    this._clipContext(ctx, displaySize);

    // Scale from scene units to pixels using the camera fov
    this._scaleContext(ctx, displaySize);

    // Translate the context to the camera position
    ctx.translate(-this._camera.pos.x, -this._camera.pos.y);

    // Render the scene
    this._scene.render(dt, ctx);

    // Restore the context state
    ctx.restore();
  }

  _getSizeInPixels(ctx) {
    // Get the display size
    var displaySize;
    switch (this._sizeType) {
      case "fraction":
        // Get the canvas size
        var canvasSize = new V2(ctx.canvas.width, ctx.canvas.height);
        displaySize = this._size.mult(canvasSize);
        break;
      case "pixels":
        displaySize = this._size;
        break;
    }

    return displaySize;
  }

  _clipContext(ctx, displaySize) {
    // Clip the context to the display size and draw the border
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.rect(-displaySize.x/2, -displaySize.y/2, displaySize.x, displaySize.y);
    ctx.stroke();
    ctx.clip();
  }

  _scaleContext(ctx, displaySize) {
    // Get the camera fov
    var fov = this._camera.fov;
    // Get the aspect ratio
    var aspectRatio = displaySize.x / displaySize.y;

    // Get the scale factor
    var scale = displaySize.y / (2 * Math.tan(fov / 2));

    // Scale the context
    ctx.scale(scale, scale);
    ctx.scale(1, aspectRatio);
  }
}

export default DisplayElement;