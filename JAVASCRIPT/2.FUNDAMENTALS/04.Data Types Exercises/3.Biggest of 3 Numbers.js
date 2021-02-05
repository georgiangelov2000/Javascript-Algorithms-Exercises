function solve(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else if (c > a && c > b) {
        console.log(c)
    }
}
solve(1, 2, 3)
solve(3, 1, 2);