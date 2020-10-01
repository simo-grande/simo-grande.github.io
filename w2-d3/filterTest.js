/*eslint-disable */
describe("Filter", function () {
    it("filter all even numbers", function () {
        const numArray = [5, 4, 24, 3];

        assert.deepEqual(numArray.filter(n => n % 2 === 0),
            [4,24]);
    });
    it("filter all age > 10", function () {
        const peopleArray = [
            { name: "Sam", age: 15 },
            { name: "William", age: 6 },
            { name: "Lucy", age: 13 },
            { name: "Barney", age: 80 }
        ]

        assert.deepEqual(peopleArray.filter(obj => obj.age > 10),
        [
            { name: 'Sam', age: 15 },
            { name: 'Lucy', age: 13 },
            { name: 'Barney', age: 80 }
          ]);
    });



});