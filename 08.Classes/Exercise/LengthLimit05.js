class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    toString() {
        if (this.innerLength == 0) {
            return '...';
        }

        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, -this.innerLength)}...`;
        }

        return this.innerString;
    }

    increase(num) {
        this.innerLength += num;
        return;
    }

    decrease(num) {
        if (this.innerLength - num < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= num;
        }
        return;
    }

}










let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
