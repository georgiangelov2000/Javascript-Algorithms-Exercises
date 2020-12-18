function solve(sec1, sec2, sec3) {
    let sum = sec1 + sec2 + sec3;
    let minutes = 0;

    if (sum > 120) {
        sum -= 120;
        minutes = 2
    } else if (sum > 60) {
        sum -= 60;
        minutes = 1;
    }

    if (sum < 10) {
        console.log(`${minutes}:0${sum} `)
    } else {
        console.log(`${minutes}:${sum}`)
    }
}
solve(35, 45, 44);