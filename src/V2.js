class V2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(v){
    this.x += v.x;
    this.y += v.y;
  }

  set(x, y){
    this.x = x;
    this.y = y;
  }

  add(v){
    return new CLS.V2(this.x + v.x, this.y + v.y);
  }

  subtract(v){
    return new CLS.V2(this.x - v.x, this.y - v.y);
  }

  scale(s){
    return new CLS.V2(this.x * s, this.y * s);
  }

  dot(v){
    return this.x * v.x + this.y * v.y;
  }

  cross(v){
    return this.x * v.y - this.y * v.x;
  }

  length(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  clone(){
    return new CLS.V2(this.x, this.y);
  }
}

export default V2;