
/*eslint-disable*/
class Clock {
    constructor(time) {
      this.time = time;
    }
  
    start() {
      let counter = 0;
      if (this.time === "h:m:s") {
        let timer = setInterval(() => {
          let date = new Date();
          let hours = date.getHours();
          let minutes = date.getMinutes();
          let seconds = date.getSeconds();
  
          if (hours < 10) return 0 + hours;
          if (minutes < 10) return 0 + minutes;
          if (seconds < 10) return 0 + seconds;
  
          console.log(hours + ":" + minutes + ":" + seconds);
  
          counter++;
          if (counter === 10) clearInterval(timer);
        }, 1000);
      } else return null;
    }
  }
  
  let clock = new Clock("h:m:s");
  clock.start();