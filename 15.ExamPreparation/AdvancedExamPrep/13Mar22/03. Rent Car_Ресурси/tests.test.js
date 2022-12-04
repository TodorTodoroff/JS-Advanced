let rentCar = require('./rentCar');
let { assert } = require('chai');

describe("rentCar tests", function () {
    describe("rentCar.searchCar(shop, model) tests ", function () {
        it("rentCar.searchCar(shop, model) / [] '' throws when invalid input", function () {
            assert.throw(() => rentCar.searchCar([], 1), "Invalid input!");
            assert.throw(() => rentCar.searchCar([], []), "Invalid input!");
            assert.throw(() => rentCar.searchCar([], {}), "Invalid input!");
            assert.throw(() => rentCar.searchCar("One", "One"), "Invalid input!");
            assert.throw(() => rentCar.searchCar("[]", "One"), "Invalid input!");
            assert.throw(() => rentCar.searchCar({}, "One"), "Invalid input!");
            assert.throw(() => rentCar.searchCar({}, []), "Invalid input!");
            assert.throw(() => rentCar.searchCar("{}", {}), "Invalid input!");
            assert.throw(() => rentCar.searchCar(1, 1), "Invalid input!");
        });
        it("rentCar.searchCar(shop, model) / [] '' returns correct output", function () {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi"), `There is 1 car of model Audi in the catalog!`);
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi", "Audi"], "Audi"), `There is 3 car of model Audi in the catalog!`);
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi", "Audi", "Audi"], "Audi"), `There is 4 car of model Audi in the catalog!`);
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW"), `There is 1 car of model BMW in the catalog!`);
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Volkswagen"), `There is 1 car of model Volkswagen in the catalog!`);
        });
        it("rentCar.searchCar(model, days)  / [] '' returns correct output", function () {
            assert.throw(() => (rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Tesla")), 'There are no such models in the catalog!');
            assert.throw(() => (rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Skoda")), 'There are no such models in the catalog!');
        });
    });
    describe("rentCar.calculatePriceOfCar(model, days)  tests ", function () {
        it("rentCar.calculatePriceOfCar(model, days) / '' Number throws when invalid input", function () {
            assert.throw(() => rentCar.calculatePriceOfCar([], 1), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar({}, 2), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar(1, 3), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar("One", []), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar("One", {}), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar("One", "2"), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar([], "2"), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar({}, []), "Invalid input!");
            assert.throw(() => rentCar.calculatePriceOfCar(1, {}), "Invalid input!");
        });
        it("rentCar.calculatePriceOfCar(model, days) / '' Number throws when invalid input", function () {
            assert.throw(() => rentCar.calculatePriceOfCar("One", 3), 'No such model in the catalog!');
            assert.throw(() => rentCar.calculatePriceOfCar("Two", 7), 'No such model in the catalog!');
        });
        it("rentCar.calculatePriceOfCar(model, days) / '' Number throws when no model is present in the catalogue ", function () {
            // Volkswagen: 20,
            //     Audi: 36,
            //         Toyota: 40,
            //             BMW: 45,
            //                 Mercedes: 50
            assert.equal(rentCar.calculatePriceOfCar("Volkswagen", 5), `You choose Volkswagen and it will cost $100!`);
            assert.equal(rentCar.calculatePriceOfCar("Audi", 10), `You choose Audi and it will cost $360!`);
            assert.equal(rentCar.calculatePriceOfCar("Toyota", 5), `You choose Toyota and it will cost $200!`);
            assert.equal(rentCar.calculatePriceOfCar("BMW", 5), `You choose BMW and it will cost $225!`);
            assert.equal(rentCar.calculatePriceOfCar("Mercedes", 5), `You choose Mercedes and it will cost $250!`);
        });
    });
    describe("rentCar.checkBudget(costPerDay, days, budget)   tests ", function () {
        it("rentCar.checkBudget(costPerDay, days, budget) / 3 x Number throws when invalid input", function () {
            assert.throw(() => rentCar.checkBudget("Two", 7, 5), "Invalid input!");
            assert.throw(() => rentCar.checkBudget("Two", [], 5), "Invalid input!");
            assert.throw(() => rentCar.checkBudget("Two", 7, []), "Invalid input!");
            assert.throw(() => rentCar.checkBudget(5, "7", []), "Invalid input!");
            assert.throw(() => rentCar.checkBudget(1, "7", 5), "Invalid input!");
            assert.throw(() => rentCar.checkBudget([], "7", 5), "Invalid input!");
            assert.throw(() => rentCar.checkBudget(2, 7, []), "Invalid input!");
            assert.throw(() => rentCar.checkBudget(2, "7", []), "Invalid input!");
            assert.throw(() => rentCar.checkBudget("2", 7, []), "Invalid input!");
            assert.throw(() => rentCar.checkBudget("2", "7", "6"), "Invalid input!");
        });
        it("rentCar.checkBudget(costPerDay, days, budget) / 3 x Number return rent possible", function () {
            assert.equal(rentCar.checkBudget(13, 50, 2000), `You rent a car!`);
            assert.equal(rentCar.checkBudget(20, 5, 120), `You rent a car!`);
        });
        it("rentCar.checkBudget(costPerDay, days, budget) / 3 x Number return rent not possible", function () {
            assert.equal(rentCar.checkBudget(100, 5, 450), 'You need a bigger budget!');
            assert.equal(rentCar.checkBudget(200, 5, 960), 'You need a bigger budget!');
        });
    });
});
