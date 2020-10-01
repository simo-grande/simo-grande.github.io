/*eslint-disable */
function sumAll(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}

console.log(sumAll(4));
console.log(sumAll(10));