// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  peek() {
    if (this.data.length === 0) return null;
    return this.data[this.data.length - 1];
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
