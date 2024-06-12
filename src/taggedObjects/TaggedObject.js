class TaggedObject {
  #tags;

  constructor() {
    this.#tags = new Set();
  }

  addTag(tag) {
    this.#tags.add(tag);
  }

  removeTag(tag) {
    this.#tags.delete(tag);
  }

  hasTag(tag) {
    return this.#tags.has(tag);
  }
};

export default TaggedObject;