/* eslint-disable*/
function printNumbers(frm, to) {

    let timId = setInterval(function () {

        console.log(frm);
       if(frm === to) {
            clearInterval(timId)
        }
        frm++;
    }, 2000);
}
printNumbers(1, 5);