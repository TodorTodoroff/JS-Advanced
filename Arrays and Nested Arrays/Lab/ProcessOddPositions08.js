function solve(arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
           output.push(arr[i] * 2);
        }
    }

    return output.reverse().join(' ');
    
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));