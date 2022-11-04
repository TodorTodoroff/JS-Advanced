const { assert } = require('chai');
let movieTheater = require('./03MovieTheater');


describe("Tests movieTheater", function () {

    describe("ageRestrictions method", function () {
        it("Test 17 age restrictions", function () {
            assert.equal(movieTheater.ageRestrictions("NC-17"), `No one under 17 admitted to watch the movie`);
        });
        it("Test no age restrictions", function () {
            assert.equal(movieTheater.ageRestrictions("NC-18"), `There are no age restrictions for this movie`);
            assert.equal(movieTheater.ageRestrictions(12), `There are no age restrictions for this movie`);
            assert.equal(movieTheater.ageRestrictions("all"), `There are no age restrictions for this movie`);
        });
        it("Test restricted", function () {
            assert.equal(movieTheater.ageRestrictions("R"), `Restricted! Under 17 requires accompanying parent or adult guardian`);
        });
        it("Test parental guidance", function () {
            assert.equal(movieTheater.ageRestrictions("PG"), `Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });
        it("Test all ages are admitted", function () {
            assert.equal(movieTheater.ageRestrictions("G"), `All ages admitted to watch the movie`);
        });
    });

    describe("moneySpent method", function () {
        it("Test function throws", function () {

            assert.throw(() => (movieTheater.moneySpent(1, [], {})), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent(1, [], "Pesho")), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent(1, 1, [])), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent(1, "Gosho", [])), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent("1", [], [])), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent([], [], [])), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent({}, [], [])), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent(1, "[]", {})), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent("pesho", [], {})), "Invalid input");
            assert.throw(() => (movieTheater.moneySpent([], "[]", [])), "Invalid input");
        });
        //(tickets, food, drinks) //number array array
        // ["Nachos", "Popcorn"]   ["Soda", "Water"]
        //     6        4.5            2.5     1.5
        it("Test bill under 50", function () {
            assert.equal(movieTheater.moneySpent(1, ["Nachos", "Popcorn"], ["Soda"]), `The total cost for the purchase is 28.00`);
        });
        it("Test bill above 50", function () {
            assert.equal(movieTheater.moneySpent(10, ["Nachos", "Popcorn"], ["Soda"]), `The total cost for the purchase with applied discount is 130.40`);
        });
    });
    describe("reservation method", function () {
        //  reservation (rowsArray, neededSeatsCount) - A function that accepts array and number.
        it("Test throw with invalid input", function () {
            assert.throw(() => (movieTheater.reservation("Pesho", 2)), "Invalid input");
            assert.throw(() => (movieTheater.reservation(2, 2)), "Invalid input");
            assert.throw(() => (movieTheater.reservation({}, 2)), "Invalid input");
            assert.throw(() => (movieTheater.reservation("[]", 2)), "Invalid input");
            assert.throw(() => (movieTheater.reservation([], "2")), "Invalid input");
            assert.throw(() => (movieTheater.reservation([], [])), "Invalid input");
            assert.throw(() => (movieTheater.reservation([], {})), "Invalid input");
            assert.throw(() => (movieTheater.reservation({}, {})), "Invalid input");
            assert.throw(() => (movieTheater.reservation("Pesho", "Gosho")), "Invalid input");
            assert.throw(() => (movieTheater.reservation(2, [])), "Invalid input");
        });
        it("Test if it reserves", function () {
            //([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }...])
            assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7), 1);
            assert.equal(movieTheater.reservation([{ rowNumber: 245, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7), 245);
            assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 20 }], 7), 2);
        });
    });
});
