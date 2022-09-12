function solve(month, year) {

    let monthDays = new Date(year, month, 0).getDate();
    
    console.log(monthDays);
}

solve(1, 2012);