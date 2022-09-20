function solve(townsArr) {
    const towns = {};
    for (let townAsString of townsArr) {
        let [name, population] = townAsString.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }
        towns[name] = population;
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

function solve2(arr) {
    let result = arr
        .map(data => {
            let current = data.split(' <-> ');
            return {
                name: current[0],
                population: Number(current[1])
            }
        })
        .reduce((arr, town) => {
            if (arr[town.name] != undefined) {
                arr[town.name] += town.population;
            } else {
                arr[town.name] = town.population;
            }
            return arr;
        }, {});

        for (let town in result) {
            console.log(`${town} : ${result[town]}`);
        }
    
}


// solve2(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// );

solve2(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);