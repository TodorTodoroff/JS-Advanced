let bookSelection = require('./solution.js');
let {assert} = require('chai');

describe("tests for bookselection", function(){
    describe("tests for isGenreSuitable (genre, age) '' num ", function(){
        it("TEST with Thriller and Horror", function (){
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12) , `Books with Thriller genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 11) , `Books with Thriller genre are not suitable for kids at 11 age`);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 5) , `Books with Thriller genre are not suitable for kids at 5 age`);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 3) , `Books with Thriller genre are not suitable for kids at 3 age`);
            assert.equal(bookSelection.isGenreSuitable("Horror", 12) , `Books with Horror genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable("Horror", 11) , `Books with Horror genre are not suitable for kids at 11 age`);
            assert.equal(bookSelection.isGenreSuitable("Horror", 3) , `Books with Horror genre are not suitable for kids at 3 age`);
        });
        it("Test without Horror and Thriller", function(){
            assert.equal(bookSelection.isGenreSuitable("Neshto", 3) , `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable("Neshto", 11) , `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable("Neshto", 12) , `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable("Neshto", 13) , `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable("Neshto", 15) , `Those books are suitable`);
        });
    });

    describe("tests for isItAffordable (price, budget)  num num ", function(){
        it("TEST if throws", function (){
            assert.throw(() => (bookSelection.isItAffordable(1,{})), "Invalid input");
            assert.throw(() => (bookSelection.isItAffordable({},2)), "Invalid input");
            assert.throw(() => (bookSelection.isItAffordable({},{})), "Invalid input");
        });
        it("Test with below 0", function(){
            assert.equal(bookSelection.isItAffordable(12, 11) , `You don't have enough money`);
        });        
        it("Test with above 0", function(){
            assert.equal(bookSelection.isItAffordable(12, 13) , `Book bought. You have 1$ left`);
        });
    });

    describe("tests for suitableTitles (books, wantedGenre)   [] '' ", function(){
        it("TEST if throws", function (){
            assert.throw(() => (bookSelection.suitableTitles(1,{})), "Invalid input");
            assert.throw(() => (bookSelection.suitableTitles([],{})), "Invalid input");
            assert.throw(() => (bookSelection.suitableTitles(1,"Pesho")), "Invalid input");
        });
        it("Test with belo", function(){
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller").join(" ") , ['The Da Vinci Code'].join(" "));
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Murdar", genre: "Thriller" }], "Thriller").join(" ") ,  [ 'The Da Vinci Code', 'Murdar' ].join(" ") );
        });        
    });

});