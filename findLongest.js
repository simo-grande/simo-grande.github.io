
"use strict";
/* eslint-disable*/
/**
 * 
 * @param {object} arr is an array input.
 * @returns  the longest word of array values. 
 */
function findLongestWord(arr) {
    let max = arr[0].length;
    let temp = [];

    for (let i = 1; i < arr.length; i++) {
        temp = arr[i].length;
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

const words = ["i", "am", "the", "best"];
alert(findLongestWord(words));