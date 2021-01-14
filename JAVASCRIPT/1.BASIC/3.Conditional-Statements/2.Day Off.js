function solve(day) {
    let typeOfDay = ''
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log(typeOfDay = 'Working Day')
            break;
        case 'Sunday':
        case 'Satuday':
            console.log(typeOfDay = 'Weekend')
            break;
        default:
            console.log('error')
            break;
    }
}
solve('april')