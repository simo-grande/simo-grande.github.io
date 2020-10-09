/*eslint-disable*/
function printNumbers(frm, to) {

    setTimeout(function func() {

        console.log(frm);
        if (frm < to) {
            setTimeout(func, 2000)
        }
        frm++;
    }, 5000);
}
printNumbers(1, 5);