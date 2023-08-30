// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
	constructor() {
		this.data = []
	}

	peek() {
		if (this.data.length === 0) return null
		return this.data[0]
	}

	push(record) {
		this.data.unshift(record)
	}

	pop() {
		return this.data.shift()
	}
}

module.exports = Stack;
