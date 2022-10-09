let { assert } = require("chai");
let { isOddOrEven } = require("../EvenOrOdd02");

describe("Test evenOrOdd function", () => {
    it("Result should return undefind with array argument", () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it("Result should return odd with todor argument", () => {
        assert.equal(isOddOrEven("todor"), "odd")
    });
    it("Result should return even with todo argument", () => {
        assert.equal(isOddOrEven("todo"), "even")
    });
    it("Result should return undefind with empty obj argument", () => {
        assert.equal(isOddOrEven({}), undefined)
    });
    it("Result should return undefind with  obj argument", () => {
        assert.equal(isOddOrEven({name: "pesho"}), undefined)
    });
    it("Result should return undefind with  boolean argument", () => {
        assert.equal(isOddOrEven(true), undefined)
    });
    it("Result should return undefind with integer argument", () => {
        assert.equal(isOddOrEven(5), undefined)
    });
});


