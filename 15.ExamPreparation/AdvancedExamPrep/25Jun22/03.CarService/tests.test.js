let carService = require('./03.CarServiceResources');
let { assert } = require("chai");


describe("carService tests", function () {
    describe("isItExpensive (issue) tests", function () {
        it("isItExpensive (issue) check parameter wrong", function () {
            assert.equal(carService.isItExpensive("NotEngine"), `The overall price will be a bit cheaper`);
        });
        it("isItExpensive (issue) check parameter correct", function () {
            assert.equal(carService.isItExpensive("Engine"), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive("Transmission"), `The issue with the car is more severe and it will cost more money`);
        });
    });
    describe("discount (numberOfParts, totalPrice) tests", function () {
        it("discount (numberOfParts, totalPrice) throws", function () {
            assert.throw(() => (carService.discount("Transmission", 1)), "Invalid input");
            assert.throw(() => (carService.discount([], 1)), "Invalid input");
            assert.throw(() => (carService.discount("1", 1)), "Invalid input");
            assert.throw(() => (carService.discount(1, "1")), "Invalid input");
            assert.throw(() => (carService.discount(1, {})), "Invalid input");
            assert.throw(() => (carService.discount(1, [])), "Invalid input");
            assert.throw(() => (carService.discount({}, [])), "Invalid input");
            assert.throw(() => (carService.discount("1", "1")), "Invalid input");
            assert.throw(() => (carService.discount([], false)), "Invalid input");
        });
        it("discount (numberOfParts, totalPrice) returns 15%", function () {
            assert.equal(carService.discount(3, 100), `Discount applied! You saved 15$`);
            assert.equal(carService.discount(7, 1000), `Discount applied! You saved 150$`);
        });
        it("discount (numberOfParts, totalPrice) returns 30%", function () {
            assert.equal(carService.discount(10, 100), `Discount applied! You saved 30$`);
            assert.equal(carService.discount(8, 1000), `Discount applied! You saved 300$`);
        });
        it("discount (numberOfParts, totalPrice) returns 0%", function () {
            assert.equal(carService.discount(2, 100), "You cannot apply a discount");
            assert.equal(carService.discount(1, 1000), "You cannot apply a discount");
        });
    });
    describe("partsToBuy (partsCatalog, neededParts)  tests", function () {
        it("partsToBuy (partsCatalog, neededParts) throws", function () {
            assert.throw(() => (carService.partsToBuy([], 1)), "Invalid input");
            assert.throw(() => (carService.partsToBuy([], "[]")), "Invalid input");
            assert.throw(() => (carService.partsToBuy([], {})), "Invalid input");
            assert.throw(() => (carService.partsToBuy("[]", [])), "Invalid input");
            assert.throw(() => (carService.partsToBuy({}, [])), "Invalid input");
            assert.throw(() => (carService.partsToBuy(1, [])), "Invalid input");
            assert.throw(() => (carService.partsToBuy(1, 1)), "Invalid input");
            assert.throw(() => (carService.partsToBuy("1", "1")), "Invalid input");
            assert.throw(() => (carService.partsToBuy({}, {})), "Invalid input");
        });
        it("partsToBuy (partsCatalog, neededParts) return correct", function () {
            // [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]
            // ["blowoff valve", "injectors"]
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"]), 145);
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "coil springs"]), 375);
        });
        it("partsToBuy (partsCatalog, neededParts) return 0", function () {
            assert.equal(carService.partsToBuy([],["blowoff valve", "injectors"]), 0);
            assert.equal(carService.partsToBuy([],[]), 0);
        });
    });
});
