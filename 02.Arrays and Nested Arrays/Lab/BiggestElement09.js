function solve(arr) {
    let result = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (Number(arr[i][j]) > result) {
                result = arr[i][j];
            }
        }
    }

    return result;

}


console.log(solve([[20, 50, 10], [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));