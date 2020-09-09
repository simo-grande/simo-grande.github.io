"use strict";
/* eslint-disable*/
/**
 * finds the largest number among three numbers.
 * @param {int} num1 the first number.
 * @param {int} num2 the second number.
 * @param {int} num3 the third number.
 * @returns the largest of all.
 */


function max(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    return (max);
}
console.log(max(4, 5, 6));