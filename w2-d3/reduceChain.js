/*eslint-disable */
const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
    { name: "Sam", age: 15 },
    { name: "William", age: 6 },
    { name: "Lucy", age: 13 },
    { name: "Barney", age: 80 }
]

let evenAgesSum = peopleArray
    .filter((even) => {
        return even.age % 2 === 0;
    }).map((values) => {
        return values.age;
        let length = values.length;
    }).reduce((sum, values) => {
        return sum + values;
    });

let averageEvenAges = evenAgesSum / 2;
console.log(averageEvenAges);

let oddAgesSum = peopleArray
    .filter((odd) => {
        return odd.age % 2 !== 0;
    }).map((values) => {
        return values.age;

    }).reduce((sum, values) => {
        return sum + values;
    });

let averageOddAges = oddAgesSum / 2;
console.log(averageOddAges);