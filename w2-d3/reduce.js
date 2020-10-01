
/*eslint-disable */
const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
const peopleArray = [
    { name: "Sam", age: 15 },
    { name: "William", age: 6 },
    { name: "Lucy", age: 13 },
    { name: "Barney", age: 80 }
]

let sum = numArray.reduce((a, b) => a + b);
console.log(sum);

let average = sum / numArray.length;
console.log(average);

let max = numArray.reduce((a, b) => a > b ? a : b);
console.log(max);

let maxAge = peopleArray.reduce((max, value) => value.age > max ? value.age : max, peopleArray[0].age);
console.log(maxAge);

let chain = peopleArray.map(element => element.age).reduce((max, value) => max>value, 0);






