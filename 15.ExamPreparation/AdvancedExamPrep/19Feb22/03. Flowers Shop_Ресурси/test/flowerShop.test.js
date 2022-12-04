let flowerShop = require('../flowerShop');
let { assert } = require('chai');

describe("Tests for flowerShop", function () {
    describe("Tests for •	calcPriceOfFlowers(flower, price, quantity)", function () {
        it("Test if throws with invalid parameters", function () {
            assert.throw(() => (flowerShop.calcPriceOfFlowers("Pesho", 1, "Pesho")), "Invalid input!");
            assert.throw(() => (flowerShop.calcPriceOfFlowers("Pesho", "1", 1)), "Invalid input!");
            assert.throw(() => (flowerShop.calcPriceOfFlowers("Pesho", "d", "Pesho")), "Invalid input!");

            assert.throw(() => (flowerShop.calcPriceOfFlowers(1, "1", "Pesho")), "Invalid input!");

            assert.throw(() => (flowerShop.calcPriceOfFlowers(1, 2, 1)), "Invalid input!");
            assert.throw(() => (flowerShop.calcPriceOfFlowers("d", 2, "Pesho")), "Invalid input!");
            assert.throw(() => (flowerShop.calcPriceOfFlowers(1, 2, "Pesho")), "Invalid input!");

            assert.throw(() => (flowerShop.calcPriceOfFlowers("p", "p", 5)), "Invalid input!");
            assert.throw(() => (flowerShop.calcPriceOfFlowers(1, 2, 5)), "Invalid input!");
            assert.throw(() => (flowerShop.calcPriceOfFlowers(1, "p", 5)), "Invalid input!");
        });
        it("Test if returns correct parameters", function () {
            assert.equal(flowerShop.calcPriceOfFlowers('flower', 15, 10), `You need $150.00 to buy flower!`);
            assert.equal(flowerShop.calcPriceOfFlowers('flower', 15, 2), `You need $30.00 to buy flower!`);
        });
    });
    describe("Tests for	checkFlowersAvailable(flower, gardenArr) '' [] ", function () {
        it("Test if returns correct parameters", function () {
            assert.equal(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"]), 'The Rose are available!');
            assert.equal(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"]), 'The Lily are available!');
            assert.equal(flowerShop.checkFlowersAvailable('Orchid', ["Rose", "Lily", "Orchid"]), 'The Orchid are available!');
        });
        it("Test if returns correct parameters", function () {
            assert.equal(flowerShop.checkFlowersAvailable('Bodil', ["Rose", "Lily", "Orchid"]), 'The Bodil are sold! You need to purchase more!');
        });
    });
    describe("Tests for	•	sellFlowers(gardenArr, space)  [] INT ", function () {
        it("Test if returns correct parameters", function () {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1), 'Rose / Orchid');
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2), 'Rose / Lily');
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0), 'Lily / Orchid');
        });
        it("Test if throws", function () {
            assert.throw(() => (flowerShop.sellFlowers({}, "Pesho")), "Invalid input!");
            assert.throw(() => (flowerShop.sellFlowers({}, 1)), "Invalid input!");
            assert.throw(() => (flowerShop.sellFlowers([], "Pesho")), "Invalid input!");
            assert.throw(() => (flowerShop.sellFlowers([], -1)), "Invalid input!");
            assert.throw(() => (flowerShop.sellFlowers([], 10)), "Invalid input!");
        });
    });
});
