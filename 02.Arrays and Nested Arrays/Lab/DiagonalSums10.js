function solve(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = arr[0].length - 1;

    arr.forEach(arr => {
        firstDiagonal += arr[firstIndex++];
        secondDiagonal += arr[secondIndex--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}


solve(
    [[20, 40],
    [10, 60]]
);

solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);