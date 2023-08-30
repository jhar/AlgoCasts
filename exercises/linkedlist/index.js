// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  forEach(fn) {
    let node = this.head;
    
    while (node) {
      fn.apply(this, [node]);
      node = node.next;
    }
  }

  getAt(index) {
    let count = 0;
    let node = this.head;

    while (count < index && node) {
      node = node.next;
      count++;
    }

    return node;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }
  
    return node;
  }

  insertAt(data, index) {
    if (index === 0) {
      return this.insertFirst(data);
    } 

    const before = this.getAt(index - 1);

    if (!before || !before.next) {
      return this.insertLast(data);
    }
   
    const newNode = new Node(data);
    const after = before.next;
    before.next = newNode;
    newNode.next = after;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertLast(data) {
    const last = this.getLast();
    const newNode = new Node(data);

    if (last) {
      last.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  removeAt(index) {
    if (index === 0) {
      if (this.head && this.head.next) {
        this.head = this.head.next;
      }
    }

    const before = this.getAt(index - 1);
    
    if (before && before.next) {
      if (before.next.next) {
        before.next = before.next.next;
      } else {
        before.next = null;
      }
    }  
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;
    if (!node) return;
    if (!node.next) {
      this.clear();
      return;
    }

    let prevNode = null;

    while (node.next) {
      prevNode = node;
      node = node.next;
    }

    prevNode.next = null;
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }
}

module.exports = { Node, LinkedList };
