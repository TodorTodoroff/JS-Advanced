function solve(arr, command) {

    // switch (command) {
    //     case 'asc':
    //         arr.sort((a, b) => a - b);
    //         break;
    //     case 'desc':
    //         arr.sort((a, b) => b - a);
    //         break;
    // }
    return arr.sort((a, b) => (command == 'asc' ? a - b : b - a));
}


console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([10, 8, 5, 7, 9, 6], 'desc'));
