const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.arr = [];
    this.obj = {};
  }
  getUnderlyingList() { // возвращает базовый связанный список { value: 3, next: null }
    this.arr.reverse();
    this.arr.forEach((item, idx) => {

      if (!idx) {
        this.obj.next = {
          value: item,
          next: null
        }
      } else {
        this.obj.next = {
          value: item,
          next: this.obj.next
        };
      }
    });
    return this.obj.next;
  }

  enqueue(item) { // добавить элемент в конец массива (очереди)
    this.arr.push(item);
  }

  dequeue() { // убрать элемент с начала массива (очереди) и возвратить его
    return this.arr.shift();
  }
}

module.exports = {
  Queue
};

// npm run test ./test/queue.test.js

// node src/stack.js