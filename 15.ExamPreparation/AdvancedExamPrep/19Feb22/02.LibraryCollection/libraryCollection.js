class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }


    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let book = this._findBook(bookName);

        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        } else if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        this.books.find((x) => x.bookName == bookName).payed = true;

        return `${bookName} has been successfully paid.`;
    }

    _findBook(bookName) {
        return this.books.find((x) => x.bookName == bookName);
    }

    removeBook(bookName) {
        let book = this._findBook(bookName);

        if (book == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        } else if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let indexOfObject = this.books.findIndex(object => {
            return object.bookName == bookName;
        });

        this.books.splice(indexOfObject, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let output = '';
        if (bookAuthor == undefined) {
            output += `The book collection has ${this.capacity - this.books.length} empty spots left.`
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).forEach(x => {
                output += `\n${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`
            });
        } else {
            let book = this.books.find(x => x.bookAuthor == bookAuthor);
            if(book == undefined){
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            output += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`
        }

            return output;
    }

}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



