/* eslint-disable*/
function inArray(arr) {

    return function (arrNum) {

        if (arr.includes(arrNum)) {
            return true;
        } else {
            return false;
        }

    }
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inArray([1, 2, 10])));