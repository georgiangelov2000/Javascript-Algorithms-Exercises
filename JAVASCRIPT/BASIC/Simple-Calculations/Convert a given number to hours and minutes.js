function solve(n) {
    let hours = Math.floor(n / 60);
    let minutes = (n % 60)
    if (minutes <= 9) {
        return `${hours}:0${minutes}`
    } else {
        return `${hours}:${minutes}`
    }

}
console.log(solve(71))
console.log(solve(450))
console.log(solve(1441))