class Game {
  #fps;
  #timeScale;
  #currentScreen;
  #intervalID;
  #ctx;

  constructor(ctx, fps = 60, timeScale = 1) {
    // A map that stores every scene in the game by name
    this.scenes = new Map();
    // A map that stores every screen in the game by name
    this.screens = new Map();

    // A string that holds the name of the current screen
    this.#currentScreen = "";
    // An integer that holds the frames per second of the game
    this.#fps = fps;
    // A float that holds the time scale of the game
    this.#timeScale = timeScale;
    // The canvas context
    this.#ctx = ctx;
  }

  set currentScreen(screen) {
    // If the screen does not exist, throw an error
    if (!this.screens.has(screen)) {
      throw new Error(`Screen ${screen} does not exist`);
    }

    // Set the current screen to the screenxs
    this.#currentScreen = screen;
  }

  set fps(fps) {
    // Make sure the fps is a number
    if (typeof fps !== "number") {
      throw new Error("FPS must be a number");
    }

    // If the fps is less than or equal to 0, throw an error
    if (fps <= 0) {
      throw new Error("FPS must be greater than 0");
    }

    // Set the fps to the fps
    this.#fps = fps;
  }

  set timeScale(timeScale) {
    // Make sure the time scale is a number
    if (typeof timeScale !== "number") {
      throw new Error("Time scale must be a number");
    }

    // If the time scale is less than or equal to 0, throw an error
    if (timeScale <= 0) {
      throw new Error("Time scale must be greater than 0");
    }

    // Set the time scale to the time scale
    this.#timeScale = timeScale;
  }

  get deltaTime() {
    // Return the delta time
    return 1 / this.#fps * this.#timeScale;
  }

  start() {
    // If the current screen is not set, throw an error
    if (!this.#currentScreen) {
      throw new Error("Current screen is not set");
    }

    // Start the game loop and store the interval ID
    this.#intervalID = setInterval(this.tick.bind(this), 1000 / this.#fps);
  }

  stop() {
    // Clear the interval
    clearInterval(this.#intervalID);
  }

  tick() {
    // Update the current screen
    this.#renderScreen(this.deltaTime, this.#ctx);

    // Update the scenes
    this.#tickScenes(this.deltaTime);
  }

  addScene(scene) {
    // Add the scene to the scenes map
    this.scenes.set(scene.name, scene);

    // Set the game of the scene to this game
    scene.game = this;
  }

  addScreen(screen, setAsCurrent = false) {
    // Add the screen to the screens map
    this.screens.set(screen.name, screen);

    // If the screen should be set as the current screen, set it
    if (setAsCurrent) {
      this.currentScreen = screen.name;
    }

    // Set the game of the screen to this game
    screen.game = this;
  }

  #renderScreen(dt, ctx) {
    // Get the current screen
    const screen = this.screens.get(this.#currentScreen);

    // If the screen does not exist, throw an error
    if (!screen) {
      throw new Error(`Screen ${this.#currentScreen} does not exist`);
    }

    // Render the screen
    screen.render(dt, ctx);
  }

  #tickScenes(dt) {
    // Tick every scene
    for (const scene of this.scenes.values()) {
      scene.tick(dt);
    }
  }
};

export default Game;