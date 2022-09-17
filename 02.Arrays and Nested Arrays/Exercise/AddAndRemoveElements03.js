function solve(array) {
    let value = [];
    let num = 0;

    array.forEach(element => {
        num++;

        switch (element) {
            case 'add':
                value.push(num);
                break;

            case 'remove':
                if (value.length !== 0) {
                    value.pop();
                }
                break;
        }
    });
    value.length == 0 ? console.log('Empty') : value.forEach(e => console.log(e));
}

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
