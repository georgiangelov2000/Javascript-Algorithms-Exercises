function solve(a, b) {
    if ((a >= 40) && (a <= 60) && (b >= 40 && b <= 60)) {
        if (a === b) {
            return "Numbers are the same";
        } else if (a > b) {
            return a
        } else {
            return b
        }
    } else {
        return "Numbers don't fit in range"
    }

}
console.log(solve(45, 60));
console.log(solve(25, 60));
console.log(solve(45, 80));