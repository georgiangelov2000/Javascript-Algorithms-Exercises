function solve(string, n1, n2) {
    let toKg = n1 / 1000;
    let price = toKg * n2;
    return `I need ${price} to buy ${toKg} kilograms orange ${string}`
}
let result = solve('orange', 2500, 1.80);
let secRes=solve('apple',1563,2.35);
console.log(result);
console.log(secRes)