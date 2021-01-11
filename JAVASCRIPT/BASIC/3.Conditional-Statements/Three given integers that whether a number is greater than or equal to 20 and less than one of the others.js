function solve(a, b, c) {
    if (a >= 20 && a < b || b < c || b >= 20 && b < a || b < c || c >= 20 && c < a || b < b) {
        return true
    } else {
        return false
    }
}
console.log(solve(23, 45, 10));
console.log(solve(23, 23, 10));
console.log(solve(21, 66, 75))