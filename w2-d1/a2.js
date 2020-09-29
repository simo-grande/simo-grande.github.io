/*eslint-disable */
const prompt = require("prompt-sync")();
function Calculator() {
    this.read = function () {
        this.n1 = +prompt("Enter a number: ");
        this.n2 = +prompt("Enter another number: ");

    }
    this.sum = function () {
        return this.n1 + this.n2;
    }
    this.mul = function () {
        return this.n1 * this.n2;
    }
}
let calculator = new Calculator();
calculator.read();
console.log ("Sum = " + calculator.sum());
console.log ("Mul = " + calculator.mul());

