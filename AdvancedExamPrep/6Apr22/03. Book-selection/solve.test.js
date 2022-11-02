let bookSelection = require('./solution');
let { assert } = require('chai');

describe("Tests for bookSelection.", function () {
    describe("Tests for isGenreSuitable.", function () {
        it("Test if returns unapropriate age.", () => {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), "Books with Thriller genre are not suitable for kids at 12 age");
            assert.equal(bookSelection.isGenreSuitable("Thriller", 11), "Books with Thriller genre are not suitable for kids at 11 age");
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), "Books with Horror genre are not suitable for kids at 12 age");
            assert.equal(bookSelection.isGenreSuitable("Horror", 11), "Books with Horror genre are not suitable for kids at 11 age");
        });
        it("Test if it returns OK if above age of 12", () => {
            assert.equal(bookSelection.isGenreSuitable("Horror", 13), "Those books are suitable");
            assert.equal(bookSelection.isGenreSuitable("Thriller", 13), "Those books are suitable");
            assert.equal(bookSelection.isGenreSuitable("Thriller", 25), "Those books are suitable");
            assert.equal(bookSelection.isGenreSuitable("Criminal", 13), "Those books are suitable");
        });
    });
    describe("Tests for isItAffordable.", function () {
        it("Test if returns not enough money", () => {
            assert.equal(bookSelection.isItAffordable(11, 10), "You don't have enough money");
        });
        it("Test if returns bought book", () => {
            assert.equal(bookSelection.isItAffordable(11, 12), "Book bought. You have 1$ left");
        });
        it("Test if returns error if price not a number ", () => {
            assert.throw(function () { bookSelection.isItAffordable("11", 12) }, "Invalid input");
        });
        it("Test if returns error if budget not a number ", () => {
            assert.throw(function () { bookSelection.isItAffordable(11, "12") }, "Invalid input");
        });
        it("Test if returns error if both are not a not a number ", () => {
            assert.throw(function () { bookSelection.isItAffordable(11, "12") }, "Invalid input");
        });
    });

    describe("Tests for suitableTitles.", function () {
        it("Test if it throws if invalid values", () => {
            assert.throw(() => { bookSelection.suitableTitles("pesho", "12") }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles({}, "asd") }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles(11, "pesho") }, "Invalid input");

            assert.throw(() => { bookSelection.suitableTitles([], {}) }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles([], 123) }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles([], []) }, "Invalid input");

        });
        it("Test if it adds titles to array", () => {
            let output = ["The Da Vinci Code", "Mein Kampf"];
            let input = [{ 
                title: "The Da Vinci Code", 
                genre: "Thriller" 
            }, { 
                    title: "Mein Kampf", 
                    genre: "Thriller" 
                },{
                    title: "Mein Kampf", 
                    genre: "NotInteresting" 
                }]
            assert.equal(bookSelection.suitableTitles(input, "Thriller").join(" "), output.join(" "));
            assert.equal(bookSelection.suitableTitles(input, "Thriller").length, 2);
            output =  ["Mein Kampf"];
            assert.equal(bookSelection.suitableTitles(input, "NotInteresting").join(" "), output.join(" "));
            output = [];
            assert.equal(bookSelection.suitableTitles(input, "123").join(" "), output.join(" "));
        });

    });
});
