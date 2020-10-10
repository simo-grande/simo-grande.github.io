/*eslint-disable*/
function makeAccount() {
    let output = 0;
    return function (string, num) {
      if (string === "add") {
        output += num;
        console.log(output);
      } else if (string === "subtract") {
        output -= num;
        console.log(output);
      }
    };
  }
  
  let counter = makeAccount();
  
  counter("add", 10);
  
  counter("add", 10);
  
  counter("subtract", 4);