// encode and decode module for node.js

var jwt = require('jwt-simple');
var payload = { foo: 'bar' };
var secret = 'xxx';

// encode
var token = jwt.encode(payload, secret);

// decode
var decoded = jwt.decode(token, secret);

console.log(token);
console.log(decoded);