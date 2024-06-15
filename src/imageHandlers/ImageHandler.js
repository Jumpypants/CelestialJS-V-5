class ImageHandler {
  constructor(src, cropOffset = null, cropSize = null) {
    // Create a new image
    this.image = new Image();
    // Set the image source
    this.image.src = src;

    // Set the crop offset and crop size
    this.cropOffset = cropOffset;
    this.cropSize = cropSize;
  }

  render(dt, ctx, size) {
    // If the cropOffset is null, draw the image without cropping
    if(this.cropOffset === null) {
      ctx.drawImage(this.image, -size.x/2, -size.y/2, size.x, size.y);
    } else {
      // Draw the image with cropping
      ctx.drawImage(this.image, this.cropOffset.x, this.cropOffset.y, this.cropSize.x, this.cropSize.y, -size.x/2, -size.y/2, size.x, size.y);
    }
  }
}

export default ImageHandler;