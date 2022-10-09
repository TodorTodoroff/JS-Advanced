let { assert } = require("chai");
let { lookupChar } = require("../CharLookUp03");


describe("test function lookupChar exits", () => {
    it("test undefined output with integer and string as an argument", () => {
        assert.equal(lookupChar(2, 'test'), undefined);
    });
    it("test undefined output with integer and integer as an argument", () => {
        assert.equal(lookupChar(2, 2), undefined);
    });
    it("test undefined output with string and integer as an argument", () => {
        assert.equal(lookupChar('test', '2'), undefined);
    });
    it("test undefined output with string and integer as an argument", () => {
        assert.equal(lookupChar('test', 2.5), undefined);
    });
    it("test undefined output with obj and array as an argument", () => {
        assert.equal(lookupChar({}, []), undefined);
    });
    it("test Incorrect index output with string and integer as an argument", () => {
        assert.equal(lookupChar('tod', 3), 'Incorrect index');
    });
    it("test Incorrect index output with string and integer as an argument", () => {
        assert.equal(lookupChar('tod', 4), 'Incorrect index');
    });
    it("test Incorrect index output with string and integer as an argument", () => {
        assert.equal(lookupChar('tod', -1), 'Incorrect index');
    });
    it("test correct output with string and integer as an argument", () => {
        assert.equal(lookupChar('tod', 1), 'o');
    });
    it("test correct output with string and integer as an argument", () => {
        assert.notEqual(lookupChar('tod', 2), 'o');
    });
});