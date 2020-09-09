"use strict";
/* global reverseArray assert  */
describe("reverse", function () {

    it("reverse of 4 5 6 is 6 5 4", function () {
        assert.deepEqual([6, 5, 4], reverseArray([4, 5, 6]));
    });

    it("reverse of 1 2 3 4 is 4 3 2 1", function () {
        assert.deepEqual([4, 3, 2, 1], reverseArray([1, 2, 3, 4]));
    });



});