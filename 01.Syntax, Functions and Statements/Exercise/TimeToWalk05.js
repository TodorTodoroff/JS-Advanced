function solve(steps, stepLength, speed) {

    let distanceToUni = steps * stepLength;
    let speedInMeterSec = speed / 3.6;

    let breaks = Math.floor(distanceToUni / 500);

    let time = distanceToUni / speedInMeterSec;

    let timeInMinutes = Math.floor(time / 60);
    let timeInSeconds = Math.round(time - (timeInMinutes * 60));
    let timeInH = Math.floor(time / 3600);

    timeInMinutes += breaks;
    timeInH += Math.floor(timeInMinutes / 60);
    timeInMinutes = timeInMinutes % 60;

    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedM = timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`;
    let formattedS = timeInSeconds < 10 ? `0${timeInSeconds}` : `${timeInSeconds}`;


    console.log(`${formattedH}:${formattedM}:${formattedS}`);

}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);