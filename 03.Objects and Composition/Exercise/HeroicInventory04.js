function solve(heroes) {
    let result = [];

    for (let i = 0; i < heroes.length; i++) {
        let obj = {};
        let split = heroes[i].split(' / ');
        obj['name'] = split[0];
        obj['level'] = Number(split[1]);
        obj['items'] = split[2].split(', ');
        result[i] = obj;
    }

    return JSON.stringify(result);
}

let output = solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

console.log(output);

output = solve(['Jake / 1000 / Gauss, HolidayGrenade']);

console.log(output);