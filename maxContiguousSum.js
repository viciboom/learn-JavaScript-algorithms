// 动态规划

function largestSum (arr) {
  var max = arr[0],
      cur = arr[0];
  for (var i = 1; i < arr.length; i ++) {
    if (cur < 0) {
      cur = 0;
    }
    max = Math.max(max, cur);
  }
  return max;
}