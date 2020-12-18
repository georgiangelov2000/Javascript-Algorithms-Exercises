function solve(date) {
    let month = date.getMonth();
    let day = date.getDay();
    let year = date.getFullYear();
    return `${month}->${day}->${year}`
}
let result = solve(new Date());
console.log(result)