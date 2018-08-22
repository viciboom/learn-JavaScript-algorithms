// 使用 bluebird 把不适用 Promise 的已有API包装成返回 Promise 的新 API

// Node.js fs.readFile
const fs = require('fs'),
      path = require('path'),
      Promise = require('bluebird');
Promise.promisifyAll(fs);

fs.readFileAsync(path.join('Graph.js'), 'utf-8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
