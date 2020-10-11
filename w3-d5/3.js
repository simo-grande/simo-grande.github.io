/* eslint-disable*/
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();  // True... since "this" refers to an object before the dot, rabbit recieves the full property.