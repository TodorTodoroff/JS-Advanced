function solve(type, weight, price){

    let weightInKg = weight / 1000;
    let result = weightInKg * price;

    console.log(`I need $${result.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);

}

solve('orange', 2500, 1.80)