function solve(num1, op1, op2, op3, op4, op5) {

    let operation = new Array(op1, op2, op3, op4, op5);
    let num = Number(num1);

    for (let i = 0; i < 5; i++) {

        switch (operation[i]) {
            case 'chop':
                console.log(num /= 2);
                break;
            case 'dice':
                console.log(num = Math.sqrt(num));
                break;
            case 'spice':
                console.log(num += 1);
                break;
            case 'bake':
                console.log(num *= 3);
                break;
            case 'fillet':
                console.log(num -= num * 0.2);
                break;
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');