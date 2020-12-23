function solve(a, b, c) {
    if (a < b && b < c) {
        return 'Strict mode'
    } else if (a >= b && b<c ){
        return 'Soft mode'
    }else{
        return 'Undefined'
    }
}
console.log(solve(10,15,31))
console.log(solve(24,22,31));
console.log(solve(50,21,15))