function solve(arr){
let output = "";
    for (let index = 0; index < arr.length; index++) {
        if(index % 2 == 0){
            output += " " + arr[index];
        }
    }
    console.log(output);
}



solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);