/*eslint-disable*/
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // ANSWER IS "TRUE"

delete rabbit.jumps;

console.log(rabbit.jumps); //  ANSWER IS "NULL"

delete animal.jumps;

console.log(rabbit.jumps); // ANSWER IS  "UNDEFINED"