function solve(arr) {
    let result = 0;


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === arr.length - 1) {
                if (arr[i][j] === arr[i][j + 1]) {
                    result++;
                }
            } else {
                if (arr[i][j] === arr[i + 1][j]) {
                    result++;
                }
                if (arr[i][j] === arr[i][j + 1]) {
                    result++;
                }
            }
        }
    }

    return result;
}

console.log(solve(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
));

console.log(solve(
    [
        ['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']
    ]

));