function solve(first, second, operator) {
    let result = 0;
    switch (operator) {
        case '-':
            result = first - second
            break;
        case '+':
            result = first + second
            break;
        case '*':
            result = first * second
            break;
        case '/':
            result = first / second
            break;
        default:
            break;
    }
    return result
}
let result = solve(6, 5, '-');
console.log(result)