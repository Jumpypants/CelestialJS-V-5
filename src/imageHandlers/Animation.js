// Import the ImageHandler class
import ImageHandler from "./ImageHandler.js";

class Animation extends ImageHandler {
  constructor(src, frameSize, frameCount, fps, loop = true, cropOffset = new V2(0, 0)) {
    // Call the parent constructor
    super(src);

    // Set the frame size
    this.frameSize = frameSize;
    // Set the frame count
    this.frameCount = frameCount;
    // Set the frames per second
    this.fps = fps;
    // Set the crop offset
    this.cropOffset = cropOffset;
    // Set the boolean value for looping
    this.loop = loop;
    // Set the current frame
    this.currentFrame = 0;
  }

  render(dt, ctx, size) {
    // Calculate the current frame
    if (this.loop) {
      this.currentFrame = (this.currentFrame + this.fps * dt) % this.frameCount;
    } else {
      this.currentFrame = Math.min(this.currentFrame + this.fps * dt, this.frameCount - 1);
    }

    // Calculate the crop offset with respect to the current frame
    this.cropOffset = new V2(this.currentFrame * this.frameSize.x, 0).add(this.cropOffset);
    
    // Draw the image with cropping
    ctx.drawImage(this.image, this.cropOffset.x, this.cropOffset.y, this.frameSize.x, this.frameSize.y, -size.x/2, -size.y/2, size.x, size.y);
  }
}

export default Animation;