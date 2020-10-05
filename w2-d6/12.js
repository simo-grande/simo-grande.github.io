/* eslint-disable*/
function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    };

    counter.set = x => count = x;
    counter.decrease = () => --count;

    return counter;
}
let counter = makeCounter();
console.log(counter());
console.log(counter.set(5));
console.log(counter.decrease());