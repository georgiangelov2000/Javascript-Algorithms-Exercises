function solve(a, b) {
    let positiveSum = Math.abs(a + b);
    let negativeSum = Math.abs(a - b);
    if (positiveSum == 15 || negativeSum == 15) {
        return true;
    } else {
        return false
    }
}
console.log(solve(7, 8))