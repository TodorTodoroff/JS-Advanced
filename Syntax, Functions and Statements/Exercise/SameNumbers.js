function solve(num) {
    let result = true;
    let sum = 0;
    let numAsString = num.toString();
    let firstValue = numAsString[0];


    for (let i = 0; i < numAsString.length; i++) {
        if (firstValue !== numAsString[i]){
            result = false;
        }
        sum += Number(numAsString[i]);
    }

    console.log(result);
    console.log(sum);
}

solve(2222222);
solve(1234);