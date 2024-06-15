class TaggedObject {
  constructor() {
    this._tags = new Set();
  }

  addTag(tag) {
    this._tags.add(tag);
  }

  removeTag(tag) {
    this._tags.delete(tag);
  }

  hasTag(tag) {
    return this._tags.has(tag);
  }
};

export default TaggedObject;