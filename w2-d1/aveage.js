/*eslint-disable */
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john = { name: "John", age: 30 };
  let pete = { name: "Pete", age: 40 };
  let mary = { name: "Mary", age: 20 };
  
  let arr = [ john, pete, mary ];
  
console.log( getAverageAge(arr) );
