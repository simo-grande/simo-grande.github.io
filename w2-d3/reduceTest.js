
/*eslint-disable */
describe("Reduce", function () {
    it("finds sum of numbers", function () {
        const numArray = [5, 4, 24, 3];

        assert.deepEqual(numArray.reduce((a, b) => a + b),
            36);
    });
    it("find average of numbers", function () {
        const numArray = [5, 4, 24, 3];
        assert.deepEqual((numArray.reduce((a, b) => a + b) / numArray.length),
            9);
    });
    it("find maximum of numbers", function () {
        const numArray = [5, 4, 24, 3];
        assert.deepEqual(numArray.reduce((a, b) => a > b ? a : b),
            24);
    });
    it("find maximum for ages", function () {
     
        assert.deepEqual(peopleArray.reduce((max, value) => value.age > max ? value.age : max, peopleArray[0].age),
            80);
    });



});