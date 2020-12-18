function solve(a, b) {
    let result = 0;
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            result = i
        }
    }
    return result;
}
let result=solve(15,5);
console.log(result)