function solve(arr){
    let num = 1;
    arr.sort((a, b) => a.localeCompare(b));
    arr.forEach(element => {
        console.log(`${num++}.${element}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"]);