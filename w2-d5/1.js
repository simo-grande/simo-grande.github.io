/*eslint-disable */
function myMap(arr, fun) {
    let temp = [];
    for (let key of arr) {
        temp.push(fun(key))
    } return temp;
}
function mapper(n) {
    return n * n;
}

let arrin = [1, 2, 3, 4, 5];
console.log("Mapped Array of power 2: ", myMap(arrin, mapper));
console.log("Orginal Array: ", arrin)