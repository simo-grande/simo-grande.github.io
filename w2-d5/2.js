/*eslint-disable*/
function myFilter(arr, fun) {
    let temp = [];
    for (let key of arr) {

        if (fun(key)) {
            temp.push(key);
        }
    }
    return temp;
}

function filter(n) {
    if (n % 2 === 0) {
        return n
    }
}
let arrin = [1, 2, 3, 4, 5];
console.log("Filered Array of Even numbers: ",myFilter(arrin, filter));
console.log("orginal array: " ,arrin);