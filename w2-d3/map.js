/*eslint-disable */
const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
const peopleArray = [
    { name: "Sam", age: 15 },
    { name: "William", age: 6 },
    { name: "Lucy", age: 13 },
    { name: "Barney", age: 80 }
]
const doubleArr = numArray.map(n => n * 2);
console.log(doubleArr);

let doublePeopleAge = peopleArray.map(obj => obj.age * 2);
console.log(doublePeopleAge);


