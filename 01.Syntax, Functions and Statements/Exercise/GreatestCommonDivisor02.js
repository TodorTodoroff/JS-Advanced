function solve(num1, num2){


    let x = Number(num1);
    let y = Number(num2);

    while(y) {
        var t = y;
        y = x % y;
        x = t;
      }

console.log(x)

}
solve(15, 5)
solve(2154, 458)