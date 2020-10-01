/*eslint-disable */
function sumAllNumbersTillOne(n) {
  if (n === 1) {
    return 1;
  }
  else {
    return n + sumAllNumbersTillOne(n - 1);
  }
}

console.log(sumAllNumbersTillOne(4));
console.log(sumAllNumbersTillOne(10));