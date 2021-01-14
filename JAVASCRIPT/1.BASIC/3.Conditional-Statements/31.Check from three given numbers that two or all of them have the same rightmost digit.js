function solve(a, b, c) {
    if (a % 10 == b % 10 && b % 10 == c % 10 && c % 10 == a % 10) {
        return true;
    } else {
        return false
    }
}
console.log(solve(10,20,30))
console.log(solve(10,14,20));
console.log(solve(1,1,1))