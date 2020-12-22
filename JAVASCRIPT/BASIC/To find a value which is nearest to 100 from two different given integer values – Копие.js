function solve(a, b) {
    let a1 = 0;
    let b1 = 0
    if (a != b) {
        a1 = Math.abs(a - 100);
        b1 = Math.abs(b - 100);
    }

    if (a1 < b1) {
        return a
    } else if (b1 < a1) {
        return b
    } else {
        return false;
    }
}
let result = solve(30, 50);
console.log(result)