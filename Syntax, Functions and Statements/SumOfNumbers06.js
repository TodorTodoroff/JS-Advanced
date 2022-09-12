function solve(n1, n2) {

    let num1 = Number(n1);
    let num2 = Number(n2);

    let sum = 0;

    for (let index = num1; index <= n2; index++) {
        sum += Number( index);
    }

    console.log(sum);

}
