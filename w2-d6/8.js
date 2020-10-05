/* eslint-disable*/
function inBetween(a, b) {

    return function (arrNum) {

        if (a <= arrNum && arrNum <= b) {
            return true;
        } else {
            return false;
        }
    }

}

let arr1 = [1, 2, 3, 4, 5, 6, 7];

console.log(arr1.filter(inBetween(3, 6))); // 3,4,5,6