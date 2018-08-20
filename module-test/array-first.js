//查找数组前 n 位元素并返回 

var first = require('array-first');

let arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(first(arr));
console.log(first(arr, 3));

// splice 裁剪
console.log(arr.splice(1, 4))