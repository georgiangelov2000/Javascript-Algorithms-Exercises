function solve(param) {
    let toCelsius = param * 9 / 5 + 32;
    let toFarenhait = (toCelsius - 32) * 5 / 9;
    return `${toFarenhait}->${toCelsius}`
}
let result = solve(60, 45);
console.log(result)