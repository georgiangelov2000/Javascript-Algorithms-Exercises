function solve(a, b) {
    let sum = Math.floor(a / b);
    let newSum = sum.toString();
    newSum = newSum.split('');
    for (var i = newSum.length - 3; i > 0; i -= 3) {
        newSum=newSum.splice(i,0,',')
    }
    return newSum
}
console.log(solve(80, 6))
console.log(solve(50, 2));

