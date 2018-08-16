// 二叉搜索树的实现
function BinarySearchTree () {
    // 结构
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    // 向树中插入一个 key
    this.insert = function (key) {
        var newNode = new Node(key);

        var insertNode = function (node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    // 树的中序遍历
    this.inOrderTravers = function (callback) {
        inOrderTraversNode(root, callback);
    }
    var inOrderTraversNode = function (node, callback) {
        if (node !== null) {
            inOrderTraversNode(node.left, callback);
            callback(node.key);
            inOrderTraversNode(node.right, callback);
        }
    }

    // 树的先序遍历
    this.preOrderTravers = function (callback) {
        preOrderTraversNode(root, callback)
    }
    var preOrderTraversNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraversNode(node.left, callback);
            preOrderTraversNode(node.right, callback);
        }
    }

    // 树的后序遍历
    this.postOrderTravers = function (callback) {
        postOrderTraversNode(root, callback)
    }
    var postOrderTraversNode = function (node, callback) {
        if (node !== null) {
            postOrderTraversNode(node.left, callback);
            postOrderTraversNode(node.right, callback);
            callback(node.key);
        }
    }

    // 搜索树中的最值
    // 最小值
    this.min = function () {
        return minNode(root);
    }
    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    // 最大值
    this.max = function () {
        return maxNode(root);
    }
    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    // 搜索特定的值
    this.search = function (key) {
        return searchNode(root, key);
    }
    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (node.key > key) {
            return searchNode(node.left, key);
        } else if (node.key < key) {
            return searchNode(node.right, key)
        } else {
            return true;
        }
    }

    // 移除一个特定的值
    this.remove = function (key) {
        root = removeNode(root, key);
    }
    var removeNode = function (node, key) {
        if (node === null) {//2
            return null;
        }
        if (key < node.key) {//3
            node.left = removeNode(node.left, key);//4
            return node;//5
        } else if (key > node.key) {//6
            node.right = removeNode(node.right, key);//7
            return node;//8
        } else {
            // 只有一个叶子节点
            if (node.left === null && node.right === null) {//9
                node = null;//10
                return node;//11
            }
            // 一个只有一个子节点的叶子节点
            if (node.left === null) {//12
                node = node.right;//13
                return node;//14
            } else if (node.right === null) {//15
                node = node.left;//16
                return node;//17
            }
            // 一个有两个子节点的叶子节点
            var aux = findMinNode(node.right);//18
            node.key = aux.key;//19
            node.right = removeNode(node.right, aux.key);//20
            return node;//21
        }
    }
    var findMinNode = function (node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

// 测试
var tree = new BinarySearchTree();

function printNode(value) {
	console.log(value);
}

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.inOrderTravers(printNode);
tree.preOrderTravers(printNode);
tree.postOrderTravers(printNode);
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(13));