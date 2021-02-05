function solve(year) {
    let leapYear = ''
    if (year % 2 == 0) {
        leapYear = year
    } else {
        leapYear = false;
    }
    return leapYear
}
let result = solve(2014)
console.log(result)