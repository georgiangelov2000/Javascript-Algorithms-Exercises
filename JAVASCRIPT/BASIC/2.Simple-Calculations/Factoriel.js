function solve(n) {
    let res = 1;
    for (let i = n; i >= 1; i--) {
        res = res * i;
    }
    console.log(res);
}
solve(4)

function secSolve(number) {
    let fact = 1;
    for (let a = 1; a <= number; a++) {
        fact *= a
    }
    console.log(fact);
}
secSolve(4)