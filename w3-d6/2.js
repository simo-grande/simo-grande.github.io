/*eslint-disable*/

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms)
    }
};
function f(a, b) {
    console.log(a + b);
}
f.defer(2000)(2, 3);



//////////////////////////////////////////////////////


Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

let user = {
    name: "John",
    sayHi() {
        console.log(this.name);
    }
}

user.sayHi = user.sayHi.defer(1000);

user.sayHi();