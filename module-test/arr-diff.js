// 对比两个数组不同的地方，并输出一个由他们组成的数组

var diff = require('arr-diff');

var a = ['a', 'b', 'c', 'd'];
var b = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(diff(b, a));