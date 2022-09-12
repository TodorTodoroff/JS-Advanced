function solve(nums) {

    aggregate(nums, 0, (x, y) => x + y);
    aggregate(nums, 0, (x, y) => x + 1 / y);
    aggregate(nums, '', (x, y) => x + y);

    function aggregate(arr, initialValue, func) {
        
        let val = initialValue;

        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }

        console.log(val);
    }
}

solve([2, 4, 8, 16])