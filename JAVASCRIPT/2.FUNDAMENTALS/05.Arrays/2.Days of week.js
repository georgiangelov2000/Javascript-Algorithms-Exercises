function solve(n) {
    let array = [
        'Monday',
        'Thuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    if (n >= 1 && n <= 7) {
        console.log(array[n])
    } else {
        console.log('invalid date')
    }
}
solve(4)

function secondSolve(number) {
    let days = [
        'Monday',
        'Thuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (number >= 1 && number <= 7) {
        return days[number]
    } else {
        return false;
    }
}
console.log(secondSolve(5))