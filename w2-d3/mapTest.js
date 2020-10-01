/*eslint-disable */
describe("map", function () {
    it("returns doubled value", function () {
        const numArray = [5, 4, 3];

        assert.deepEqual(numArray.map(n => n * 2),
            [10, 8, 6]);
    });
    it("returns doubled Age", function () {
        const peopleArray = [
            { name: "Sam", age: 15 },
            { name: "William", age: 6 },
            { name: "Lucy", age: 13 },
            { name: "Barney", age: 80 }
        ]

        assert.deepEqual(peopleArray.map(obj => obj.age * 2),
        [ 30, 12, 26, 160 ]);
    });
});
