/*eslint-disable*/
function myReduce(arr, func, init) {
    let accum = init;
    for (let key of arr) {
        accum = func(accum, key);
    }
    return accum;
}
function fsum(accum, curr) {
    return accum + curr;
}

let arr1 = [1, 2, 3, 4];
console.log(myReduce(arr1, fsum, 0));