"use strict";
/* global sum assert  */
describe("sum", function () {

    it("sum of 4 5 6 is 15", function () {
        assert.equal(15, sum([4,5,6]));
    });

    it("sum of 1 2 2 is 5", function () {
        assert.equal(5, sum([1,2,2]));
    });



});