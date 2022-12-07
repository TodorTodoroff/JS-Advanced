let motorcycleRider = require('./Motorcycle Rider.js');
let { assert } = require('chai');


describe("Tests for motorcycleRider", function () {
    describe("licenseRestriction (category) '' ", function () {
        it("test if throws", function () {
            assert.throw(() => motorcycleRider.licenseRestriction([]), "Invalid Information!");
            assert.throw(() => motorcycleRider.licenseRestriction({}), "Invalid Information!");
            assert.throw(() => motorcycleRider.licenseRestriction(2), "Invalid Information!");
            assert.throw(() => motorcycleRider.licenseRestriction("A3"), "Invalid Information!");
            assert.throw(() => motorcycleRider.licenseRestriction("AMT"), "Invalid Information!");
        });
        it("Test correct output", () => {
            assert.equal(motorcycleRider.licenseRestriction("AM"), "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
            assert.equal(motorcycleRider.licenseRestriction("A1"), "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
            assert.equal(motorcycleRider.licenseRestriction("A2"), "Motorcycles with maximum power of 35KW. and the minimum age is 18.");
            assert.equal(motorcycleRider.licenseRestriction("A"), "No motorcycle restrictions, and the minimum age is 24.");
        });
    });
    describe("Test •	motorcycleShowroom (engineVolume, maximumEngineVolume) [] num ", () => {
        it("test if throws", () => {
            assert.throw(() => motorcycleRider.motorcycleShowroom([]), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom(2), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom([], "p"), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom({}, 55), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom("p", 55), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom("p", []), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom({}, {}), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom(["pesho", "gosho"], 49), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom(["pesho", "gosho"], 5), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom([], 5), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom([], 49), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom([], 51), "Invalid Information!");
            assert.throw(() => motorcycleRider.motorcycleShowroom(["51", "520"], 49), "Invalid Information!");
        });
        it("test correct output", () => {
            assert.equal(motorcycleRider.motorcycleShowroom(["51"], 52), "There are 1 available motorcycles matching your criteria!");
            assert.equal(motorcycleRider.motorcycleShowroom(["51", "150", "200"], 201), "There are 3 available motorcycles matching your criteria!");
            assert.equal(motorcycleRider.motorcycleShowroom(["49", "150", "200"], 201), "There are 2 available motorcycles matching your criteria!");
            assert.equal(motorcycleRider.motorcycleShowroom(["49", "49", "200"], 201), "There are 1 available motorcycles matching your criteria!");
            assert.equal(motorcycleRider.motorcycleShowroom(["49", "49", "200", "250"], 201), "There are 1 available motorcycles matching your criteria!");
            assert.equal(motorcycleRider.motorcycleShowroom(["49", "49", "200", "202"], 201), "There are 1 available motorcycles matching your criteria!");
            assert.equal(motorcycleRider.motorcycleShowroom(["49", "49", "150", "200", "202"], 201), "There are 2 available motorcycles matching your criteria!");
            assert.equal(motorcycleRider.motorcycleShowroom(["49", "150", "125", "200", "202"], 201), "There are 3 available motorcycles matching your criteria!");
        });
    });
    describe("Test •	otherSpendings (equipment, consumables, discount) [] [] boolean ", () => {
        it("test if throws", () => {
            assert.throw(() => motorcycleRider.otherSpendings([], [], []), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings([], {}, true), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings("p", [], true), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings("p", "p", "p"), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings([], "p", "p"), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings("p", [], "p"), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings("p", [], false), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings([], [], "p"), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings("p", [], true), "Invalid Information!");
            assert.throw(() => motorcycleRider.otherSpendings([], "p", true), "Invalid Information!");
        });
        it("test if return correct output with discount", () => {
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true), "You spend $540.00 for equipment and consumables with 10% discount!");
            assert.equal(motorcycleRider.otherSpendings(["jacked"], ["engine oil", "oil filter"], true), "You spend $360.00 for equipment and consumables with 10% discount!");
            assert.equal(motorcycleRider.otherSpendings(["helmet"], ["engine oil", "oil filter"], true), "You spend $270.00 for equipment and consumables with 10% discount!");
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil"], true), "You spend $513.00 for equipment and consumables with 10% discount!");
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter"], true), "You spend $477.00 for equipment and consumables with 10% discount!");
            assert.equal(motorcycleRider.otherSpendings(["helmet"], ["oil filter"], true), "You spend $207.00 for equipment and consumables with 10% discount!");
            assert.equal(motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true), "You spend $243.00 for equipment and consumables with 10% discount!");
            assert.equal(motorcycleRider.otherSpendings(["jacked"], ["engine oil"], true), "You spend $333.00 for equipment and consumables with 10% discount!");
            assert.equal(motorcycleRider.otherSpendings(["jacked"], ["oil filter"], true), "You spend $297.00 for equipment and consumables with 10% discount!");
        });
        it("test if return correct output without discount", () => {
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false), "You spend $600.00 for equipment and consumables!");
            assert.equal(motorcycleRider.otherSpendings(["jacked"], ["engine oil", "oil filter"], false), "You spend $400.00 for equipment and consumables!");
            assert.equal(motorcycleRider.otherSpendings(["helmet"], ["engine oil", "oil filter"], false), "You spend $300.00 for equipment and consumables!");
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil"], false), "You spend $570.00 for equipment and consumables!");
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter"], false), "You spend $530.00 for equipment and consumables!");
            assert.equal(motorcycleRider.otherSpendings(["helmet"], ["oil filter"], false), "You spend $230.00 for equipment and consumables!");
            assert.equal(motorcycleRider.otherSpendings(["helmet"], ["engine oil"], false), "You spend $270.00 for equipment and consumables!");
            assert.equal(motorcycleRider.otherSpendings(["jacked"], ["engine oil"], false), "You spend $370.00 for equipment and consumables!");
            assert.equal(motorcycleRider.otherSpendings(["jacked"], ["oil filter"], false), "You spend $330.00 for equipment and consumables!");
        });
    });
});
