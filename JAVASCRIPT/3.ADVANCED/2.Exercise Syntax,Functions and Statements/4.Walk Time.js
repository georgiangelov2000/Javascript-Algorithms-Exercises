function solve(steps, stepLength, speed) {
    let distanceInMeters = steps * stepLength;
    let speedForMeterInSec = speed / 3.6;

    let rest = Math.floor(distanceInMeters / 500);
    let time = distanceInMeters / speedForMeterInSec + rest * 60;

    let timeInHours = Math.floor(time / 3600);
    let timeInMins = Math.floor(time / 60)
    let timeInSec = Math.floor(time % 60);

    if (timeInHours < 10) {
        console.log(`0${timeInHours}:${timeInMins}:${timeInSec}`)
    } else {
        console.log(`${timeInHours}:${timeInMins}:${timeInSec}`)
    }
}
solve(4000, 0.60, 5)