// 数组去重

var dedupe = require('dedupe');

var a = [1, 2, 2, 3];
var b = dedupe(a);

console.log(b)

// 使用 Set

function unique (arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return
  }
  return [...new Set(arr)];
}
var c = unique(a);
console.log(c)