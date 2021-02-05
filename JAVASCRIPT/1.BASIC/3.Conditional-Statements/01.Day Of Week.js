function solve(n) {
    let day = '';
    switch (n) {
        case 1:
            day = 'Monday';
            console.log(day)
            break;
        case 2:
            day = 'Tuesday';
            console.log(day)
            break;
        case 3:
            day = 'Wednesday';
            console.log(day)
            break;
        case 4:
            day = 'Thursday';
            console.log(day)
            break;
        case 5:
            day = 'Friday';
            console.log(day)
            break;
        case 6:
            day = 'Sunday';
            console.log(day)
            break;
        case 7:
            day = 'Saturday';
            console.log(day)
            break;
        default:
            console.log('error')
            break;
    }
}
solve(8)