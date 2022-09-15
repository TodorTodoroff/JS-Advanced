function solve(speed, area) {

    let isOver;
    let areaSpeed;

    switch (area) {
        case 'city':
            areaSpeed = 50;
            speed > areaSpeed ? isOver = true : isOver = false;
            break;
        case 'residential':
            areaSpeed = 20;
            speed > areaSpeed ? isOver = true : isOver = false;
            break;
        case "motorway":
            areaSpeed = 130;
            speed > areaSpeed ? isOver = true : isOver = false;
            break;
        case "interstate":
            areaSpeed = 90;
            speed > areaSpeed ? isOver = true : isOver = false;
            break;
    }

    if (isOver) {
        let overSpeed = speed - areaSpeed;
        let status;
        if (overSpeed <= 20) {
            status = 'speeding';
        } else if (overSpeed <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${areaSpeed} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${areaSpeed} zone`);
    }
}


solve(40, 'city');
solve(21, 'residential');
