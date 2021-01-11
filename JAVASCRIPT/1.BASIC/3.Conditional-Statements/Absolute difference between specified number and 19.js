function solve(n, m) {
    let res = 0;
    if (n <= m) {
        res = m - n
    } else if (n > m) {
        res = (n - m) * 3
    }
    return res
}
let result = solve(20, 19);
console.log(result)