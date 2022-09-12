function solve(x) {

    let type = typeof(x);

    if (type === 'number') {
        console.log((Math.PI * Math.pow(x, 2)).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
