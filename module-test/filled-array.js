// 返回一个按照指定条件填充的数组

const filledArray = require('filled-array');

let a = filledArray('x', 3);

let b = filledArray(0, 3);

let c = filledArray(i => {
  return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
}, 15);

console.log(a)
console.log(b)
console.log(c)