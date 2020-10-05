/* eslint-disable*/
function makeArmy() {

    let shooters = [];

    let i = 0;
    while (i < 10) {
     let j = i;
        let shooter = function () {
            return j;
        };
        shooters.push(shooter);
        i++;
    }



    return shooters;
}

let army = makeArmy();

console.log(army[0]());
console.log(army[1]());
console.log(army[2]());



