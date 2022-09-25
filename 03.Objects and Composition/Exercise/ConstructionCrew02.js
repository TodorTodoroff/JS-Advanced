function solve(obj) {

    if (obj.dizziness == true) {
        let neededWater = 0.1 * Number(obj.weight) * Number(obj.experience);
        obj.levelOfHydrated += Number(neededWater);
        obj.dizziness = false;
    }

    return obj;
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));


console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));


console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
));



