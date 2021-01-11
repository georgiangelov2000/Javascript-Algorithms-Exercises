function solve(input) {
    let meetings = {};
    for (let line of input) {
        let [day, name] = line.split(' ');
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict ${day}`)
        } else {
            meetings[day] = name
            console.log(`Scheduled ${day}`)
        }
    }

    for (let element in meetings) {
        console.log(`${element} -> ${meetings[element]}`)
    }

}
solve([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])