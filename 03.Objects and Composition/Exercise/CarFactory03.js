function solve(car) {
    let result = {};
    result['model'] = car.model;

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    let engRequest = car.power;
    if (engRequest <= 90) {
        result['engine'] = smallEngine;
    } else if (engRequest <= 120) {
        result['engine'] = normalEngine;
    } else {
        result['engine'] = monsterEngine;
    }

    let hatchback = { type: 'hatchback', color: car.color };
    let coupe = { type: 'coupe', color: car.color };

    let carrigeRequest = car.carriage;

    if (carrigeRequest == 'hatchback') {
        result['carriage'] = hatchback;
    } else {
        result['carriage'] = coupe;
    }

    let wheels = car.wheelsize;

    if (wheels % 2 == 0) {
        wheels--;
    }

    result['wheels'] = [wheels, wheels, wheels, wheels];


    return result;
}

let result = solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);

console.log(result);

result = solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);


console.log(result);
