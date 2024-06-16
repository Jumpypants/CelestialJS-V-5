// Import the TaggedObject class
import TaggedObject from "./TaggedObject.js";

class Screen extends TaggedObject {
  constructor(name, elements = []) {
    // Call the parent constructor
    super();
    // Add the "Screen" tag to the screen
    this.addTag("Screen");

    // A string that holds the name of the screen
    this.name = name;
    // An array that holds the elements of the screen
    this.elements = [];
    // Add the elements to the screen
    for (let element of elements) {
      this.addElement(element);
    }
    // A pointer to the game that the screen is in (Will be set when the screen is added to a game)
    this._game = null;
  }

  render(dt, ctx) {
    // Render the elements of the screen
    this._renderElements(dt, ctx);
  }

  addElement(element) {
    // Add the element to the screen
    this.elements.push(element);

    // Set the screen of the element to this screen
    element.screen = this;
  }

  _renderElements(dt, ctx) {
    // Loop through all the elements in the screen
    for (let element of this.elements) {
      // Render the element
      element.render(dt, ctx);
    }
  }
}

export default Screen;