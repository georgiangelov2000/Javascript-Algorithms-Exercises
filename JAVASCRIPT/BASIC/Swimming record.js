function solve(recordInSeconds, distanceInMetres, TimeInSeconds) {
    let distance = distanceInMetres * TimeInSeconds;
    // console.log(distance)
    let on15Metetrs = distanceInMetres / 15 * 12.5;
    // console.log(on15Metetrs)
    let fullTime = distance + on15Metetrs;

    if (fullTime > recordInSeconds) {
        console.log(`No he failed! He was ${fullTime-recordInSeconds} seconds slower`)
    } else if (recordInSeconds > fullTime) {
        console.log(`Yes he succeeded ! The new world record is ${fullTime.toFixed(2)} seconds `)
    }
}
solve(55555.67, 3017, 5.03);