function solve(a, b) {
    if (b == 0) {
        return a
    }
    return solve(b, a % b)


}
let result = solve(2154, 458);
console.log(result)