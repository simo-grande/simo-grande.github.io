
/*eslint-disable */
function calculateFactorial(n, fact = 1) {

    if (n === 1) {
        return fact;
    }
    else {
        return calculateFactorial(n - 1, fact * n);
    }

}

console.log(calculateFactorial(5));
console.log(calculateFactorial(4));
console.log(calculateFactorial(3));
