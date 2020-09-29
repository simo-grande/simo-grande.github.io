/*eslint-disable */
const prompt = require("prompt-sync")();

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("How much to add? ", 0);

    };
}

let accu = new Accumulator(5);
accu.read();
//accu.read();
console.log(accu.value);
