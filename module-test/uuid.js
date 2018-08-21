// Simple,fast generation of RFC4122 UUIDS

const uuidv1 = require('uuid/v1');
console.log(uuidv1());

const uuidv3 = require('uuid/v3');

// ... using predefined DNS namespace (for domain names)
console.log(uuidv3('hello.example.com', uuidv3.DNS));

// ... using predefined URL namespace (for, well, URLs)
console.log(uuidv3('http://example.com/hello', uuidv3.URL));

// E.g. the one here was generated using this modules `uuid` CLI.
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
console.log(uuidv3('Hello, World', MY_NAMESPACE));

const uuidv4 = require('uuid/v4');
console.log(uuidv4);

const uuidv5 = require('uuid/v5');
