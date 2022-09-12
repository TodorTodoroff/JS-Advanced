function solve(num){

    if(typeof num != 'number'){
        num = 5;
   }
       for(let i = 0; i < num; i++){
           console.log(`${('* '.repeat(num)).trimEnd()}`);
       }

}

solve('3');