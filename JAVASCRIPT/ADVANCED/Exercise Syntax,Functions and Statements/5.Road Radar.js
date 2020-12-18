function solve(speed, area) {
    let message = ''
    if (area == 'motorway') {
        if (speed > 130) {
            message = 'reckless driving'
        } else {
            message = ''
        }
    } else if (area == 'interstate') {
        if (speed > 90) {
            message = 'excessive speeding'
        } else {
            message = ''
        }
    } else if (area == 'city') {
        if (speed > 50) {
            message = 'speeding'
        } else {
            message = ''
        }
    } else if (area == 'residential') {
        if (speed > 20) {
            message = 'speeding'
        } else {
            message = ''
        }
    }

    return message
}
let result = solve(40, 'city');
console.log(result)