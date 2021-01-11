function solve(hour, day) {
    if (day === 'Monday') {
        if (hour >= 10 && hour <= 18) {
            console.log('open')
        } else {
            console.log('closed')
        }
    } else if (day === 'Tuesday') {
        if (hour >= 10 && hour <= 18) {
            console.log('open')
        } else {
            console.log('closed')
        }
    } else if (day === 'Wednesday') {
        if (hour >= 10 && hour <= 18) {
            console.log('open')
        } else {
            console.log('closed')
        }
    } else if (day === 'Thursday') {
        if (hour >= 10 && hour <= 18) {
            console.log('open')
        } else {
            console.log('closed')
        }
    } else if (day === 'Friday') {
        if (hour >= 10 && hour <= 18) {
            console.log('open')
        } else {
            console.log('closed')
        }
    }
    if (day === 'Saturday') {
        if (hour >= 10 && hour <= 18) {
            console.log('open')
        } else {
            console.log('closed')
        }
    }
    if (day === 'Sunday') {
        console.log('closed')
    }
}
solve(11,'Sunday')