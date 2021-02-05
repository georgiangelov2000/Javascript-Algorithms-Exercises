function solve(array) {
    return array.sort((a, b) => a - b);
}
let result = solve([1, 2, 3, 4, 5])
console.log(result)