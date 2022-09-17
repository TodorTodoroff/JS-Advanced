function solve(arr) {
    let min = Number.MIN_SAFE_INTEGER;
    let reuslt = [];

    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);
        if (current > min) {
            min = current;
            reuslt.push(current);
        }
    }
    return reuslt;
}


console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(solve([1,
    2,
    3,
    4]
));

console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
));