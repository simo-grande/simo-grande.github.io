/*eslint-disable*/
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [john, pete];

let output = people.map((key)=> ({
  fullName: key.name + " " + key.surname,
  age: key.age,
}));

console.log(output);