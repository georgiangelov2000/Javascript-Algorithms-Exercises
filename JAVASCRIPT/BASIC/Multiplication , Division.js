function solve(n1, operator, n2) {
    let result = 0;
    switch (operator) {
        case '*':
            result = n1 * n2
            break;
        case '/':
            result = n1 / n2
            break;
        default:
            break;
    }
    return result;
}
let result = solve(5, '/', 6);
console.log(result);