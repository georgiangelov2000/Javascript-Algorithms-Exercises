function solve(n, m) {
    let res = 0;
    if (n <= m) {
        return res = m-n
    } else {
        return res = (n - m) * 2
    }
}
let result = solve(32, 13);
let secResult=solve(11,13);
console.log(`${result} ${secResult}`)