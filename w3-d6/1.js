/*eslint-disable*/
Function.prototype.defer = function (ms) {
    setTimeout(this, ms)
}

function f() {
    console.log("hello");
}
f.defer(4000);

