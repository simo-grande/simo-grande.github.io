/*eslint-disable */
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b

    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}
let ex = new Calculator;
console.log(ex.calculate("3 + 7"));


let ex2 = new Calculator;
ex2.addMethod("*", (a, b) => a * b);
console.log(ex2.calculate("3 * 7")); 