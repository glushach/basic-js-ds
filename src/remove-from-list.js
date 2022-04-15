const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
    let node = list; // сохранение входящей ноды
    let iterator = list;
    let prevList;

    while(iterator) {
        if(iterator.value === k) {
            if(!prevList) {
                node = iterator.next; // получение следующей ноды
                iterator = iterator.next; // уменьшение входящего списка на 1
            } else {
                prevList.next = iterator.next; // получение следующей ноды
                iterator = iterator.next; // уменьшение входящего списка на 1
            }
        } else {
            prevList = iterator; // получение текущей ноды
            iterator = iterator.next; // уменьшение входящего списка на 1
        }
    }
    return node;
}

module.exports = {
  removeKFromList
};

// npm run test ./test/remove-from-list.test.js

// node src/remove-from-list.js