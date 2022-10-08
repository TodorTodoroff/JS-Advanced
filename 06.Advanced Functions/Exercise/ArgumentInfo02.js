function solve(...params) {
    let typeCounter = {};
    for (const arg of params) {
      console.log(`${typeof arg}: ${arg}`);
  
      typeCounter[typeof arg]++; 
      if (!typeCounter[typeof arg]) {
        typeCounter[typeof arg] = 1;
      } 
    }
  
    let sortedKeys = Object.keys(typeCounter)
      .sort((a, b) => typeCounter[b] - typeCounter[a]);
    sortedKeys.forEach((key) => console.log(`${key} = ${typeCounter[key]}`));
  }
  
  solve('cat', 42, function () {
    console.log('Hello world!');
  });