/*eslint-disable*/

function tenClock() {
    let second = 0;
    let timer = setInterval(function () {
      let date = new Date();
      console.log(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
      );
      second++;
      if (second === 10) {
        clearTimeout(timer);
      }
    }, 1000);
  }
  
  tenClock();