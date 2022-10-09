function add(n) {
    let sum = n;

    function calculate(num) {
        sum += num;
        return calculate;
    }

    calculate.toString = () => sum;
    return calculate;
}