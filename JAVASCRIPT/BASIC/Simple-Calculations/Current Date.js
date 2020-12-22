function solve(date) {
    let array = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    let currentDay = array[date.getDay()];
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();
    let getSeconds = date.getMinutes();
    return `Today is ${currentDay} \n${getHours}:${getMinutes}:${getSeconds} `;

}
let result=solve(new Date());
console.log(result);