"use strict";
/* eslint-disable*/
/**
 * 
 * @param {object} arr is an array input.
 * 
 * @returns sum of array values. 
 */

function sum(arr) {
    let sum = 0;
    for (let i = 0;i<arr.length;i++) {
        sum += arr[i];
    }
    return sum;

}
const ar1=[1,2,3,4];
alert(sum(ar1));

