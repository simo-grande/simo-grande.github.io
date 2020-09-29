/*eslint-disable */
let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() ); 