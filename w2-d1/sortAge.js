/*eslint-disable */
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 12 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);
  console.log(arr[0].name); 
  console.log(arr[1].name); 
  console.log(arr[2].name);