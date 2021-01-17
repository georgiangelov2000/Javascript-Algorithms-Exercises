function solve(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        console.log(factorial*=i);
    }

}
solve(5)