function solve(n, m) {
    let isFalse = true;
    let res = n + m;
    if (n == 50) {
        return `the n 50 is `
    } else if (m == 50) {
        return `the m 50 is `
    } else if (res == 50) {
        return `the res is 50 `
    } else {
        isFalse = false;
        return `${isFalse}`
    }

}
let result = solve(20, 30)
console.log(result)