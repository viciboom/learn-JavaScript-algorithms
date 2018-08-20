// 创建一个指定范围的数组

var array = require('array-range');

let a = array(3);
let b = array(3, 8);

let c = array(5).map( x => x * x );
let d = array(2, 10).filter( x => x%2 === 0 );

console.log(a)
console.log(b)
console.log(c)
console.log(d)