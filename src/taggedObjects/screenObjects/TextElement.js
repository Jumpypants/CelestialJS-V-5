// Import the ScreenObject class
import ScreenObject from "./ScreenObject.js";
// Import the V2 class
import V2 from "../../V2.js";

class TextElement extends ScreenObject {
  constructor(text, pos = new V2(0, 0), font = "32px arial", color = "red", anchor = "center", align = "start", baseline = "middle") {
    // Call the parent constructor
    super(pos, anchor);
    // Add the "TextElement" tag to the text element
    this.addTag("TextElement");

    // A string that holds the text of the text element
    this._text = text;
    // A string that holds the font of the text element
    this._font = font;
    // A string that holds the color of the text element
    this._color = color;
    // A string that holds the text alignment of the text element
    this._align = align;
    // A string that holds the text baseline of the text element
    this._baseline = baseline;
  }

  set text(value) {
    // Set the text of the text element
    this._text = value;
  }

  set font(value) {
    // Set the font of the text element
    this._font = value;
  }

  set color(value) {
    // Set the color of the text element
    this._color = value;
  }

  set align(value) {
    // Set the text alignment of the text element
    this._align = value;
  }

  set baseline(value) {
    // Set the text baseline of the text element
    this._baseline = value;
  }

  render(dt, ctx) {
    // Save the context state
    ctx.save();

    // Translate the context based on the anchor
    this._translateToAnchor(ctx);

    // Translate the context to the position of the screen element
    ctx.translate(this.pos.x, this.pos.y);

    // Set the font of the context
    ctx.font = this._font;
    // Set the text alignment of the context
    ctx.textAlign = this._align;
    // Set the text baseline of the context
    ctx.textBaseline = this._baseline;
    // Set the fill style of the context
    ctx.fillStyle = _this.color;
    // Fill the text
    ctx.fillText(this._text, 0, 0);

    // Restore the context state
    ctx.restore();
  }
}

export default TextElement;