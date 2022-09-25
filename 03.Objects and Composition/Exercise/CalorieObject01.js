function solve(obj) {

    let result = {};

    for (let i = 0; i < obj.length; i++) {
        let iNum = Number(i);
        if (Number(i) % 2 == 0) {
            result[obj[iNum]] = Number(obj[iNum + 1]);
        }
    }


    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);