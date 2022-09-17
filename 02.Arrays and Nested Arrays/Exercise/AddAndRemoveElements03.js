function solve(array) {

    let value = [];

    value.push(1);

    array.forEach(element => {

        switch (element) {

            case 'add':
                break;

            case 'remove':
                break;

        }
    });
}

solve([
    'add',
    'add',
    'add',
    'add']
);

solve([
    'add',
    'add',
    'remove',
    'add',
    'add']
);

solve([
    'remove',
    'remove',
    'remove']
);
