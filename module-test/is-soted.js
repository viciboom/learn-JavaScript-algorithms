// 判断数组是否有序

var sorted = require('is-sorted')

console.log(sorted([1, 2, 3]))

console.log(sorted([3, 2, 1]))

console.log(sorted([3, 2, 1], function (a, b) { return b - a }))