const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    if (this.data) {
      return this.data;
    } else {
      return null;
    }
  }

  add(data) {
    this.data = addItem(this.data, data) // добавить в пределах корня и листа
    function addItem(node, data) {
      if(!node) {
        return new Node(data) // если дерево пустое, создать первый элемент
      } else if (node.data === data) { // если в дереве уже есть такой лист
        return node;
      } else if (data < node.value) { // если лист меньше родителя, добавить влево
        node.left = addItem(node.left, data);
      } else { // если лист больше родителя, добавить вправо
        node.right = addItem(node.right, data);
      }
      return node;
    }
    return this.data;
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    function findItem(node, data) { // поиск в пределах
      if (!node) return null;
      if (data < node.data) { // если искомая нода меньше текущей ноды
        if (node.left) {
          return findItem(node.left, data);
        } else {
          return findItem(node.right, data);
        }
      } else if (data > node.data) { // если искомая нода больше текущей ноды
        return findItem(node.right, data);
      } else {
        return node;
      }
    }

    return findItem(this.data, data);
  }

  remove(data) {
    this.data = removeItem(this.data, data)
    function removeItem(node, data) {
      if (!node) return null;

      if (data < node.data) {
        if (node.left) {
          node.left = removeItem(node.left, data);
          return node;
        } else {
          node.right = removeItem(node.right, data);
          return node;
        }
      } else if (data > node.data) {
        if (node.right) {
          node.right = removeItem(node.right, data);
          return node;
        } else {
          node.left = removeItem(node.left, data);
          return node;
        }
      } else {
        node = node.right; // если равно, то заменить на следующую ноду
        return node;
      } // end condition

    }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

// npm run test ./test/binary-search-tree.test.js
// node src/binary-search-tree.js