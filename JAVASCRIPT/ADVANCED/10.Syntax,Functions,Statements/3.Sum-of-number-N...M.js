function solve(n, m) {
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    return sum
}
let result = solve(1, 5);
console.log(result)