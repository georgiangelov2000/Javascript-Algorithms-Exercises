function solve(a) {
    if (a % 3 === 0 || a % 7 === 0) {
        return `a is multiple of 3 or 7`
    } 
    else {
        return false
    }
}
let result = solve(21);
console.log(result)