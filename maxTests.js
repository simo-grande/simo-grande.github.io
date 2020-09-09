"use strict";
/* global max assert */
describe("max", function () {

    it("max of 4 5 6 is 6", function () {
        assert.equal(6, max(4, 5, 6));
    });

    it("max of 5  4 -444 is 5", function () {
        assert.equal(5, max(5, 4, -44));
    });



});