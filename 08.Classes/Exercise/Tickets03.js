function solve(arr, sortCommand) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;

        }
    }
    
    let sortedArr = [];

    for (let part of arr) {
        let [destination, price, status] = part.split("|");
        let ticket = new Ticket(destination, Number(price), status);
        sortedArr.push(ticket);
    }

    if (sortCommand == 'destination') {
        sortedArr.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortCommand == 'price') {
        sortedArr.sort((a, b) => a.price - b.price);
    } else if (sortCommand == 'status') {
        sortedArr.sort((a, b) => a.status.localeCompare(b.status));
    }

    return sortedArr;
}

// console.log(solve([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
// ],
//     'destination'
// ));


console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
));