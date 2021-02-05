function solve(a, b) {
    if (a >= 50 && a <= 99 || b >= 50 && b <= 99) {
        return true;
    } else {
        return false
    }
}
let result=solve(21,82);
console.log(result)