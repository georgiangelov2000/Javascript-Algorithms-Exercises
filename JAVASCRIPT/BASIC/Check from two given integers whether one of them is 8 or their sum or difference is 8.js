function solve(a, b) {
    let sum = a - b;
    if (a == 8 || b == 8 || a + -b == 8) {
        return true;
    } else {
        return false
    }
}
console.log(solve(32, 24))