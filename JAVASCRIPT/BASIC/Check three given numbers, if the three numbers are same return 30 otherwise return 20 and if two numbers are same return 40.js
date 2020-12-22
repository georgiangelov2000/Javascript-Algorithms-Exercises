function solve(a, b, c) {
    if (a == b && b == c) {
        return 30
    }
    if (a == b || b == c || c == a) {
        return 40
    }
    return 20
}
console.log(solve(8, 8, 8))
console.log(solve(8, 8, 18))
console.log(solve(8, 7, 18))