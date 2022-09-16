function solve(input){
    return input.match(/\w+/g).join(", ").toUpperCase();
}

console.log(solve('Hi, how are you?'));
console.log(solve('hello'));