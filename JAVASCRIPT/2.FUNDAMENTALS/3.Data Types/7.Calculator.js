function calc(n1, operator, n2) {
    let result = 0;
    switch (operator) {
        case '-':
            result = n1 - n2
            break;
        case '+':
            result = n1 + n2
            break;
        case '*':
            result = n1 * n2
            break;
        case '/':
            result = n1 / n2
            break;
        default:
            break;
    }
    console.log(result)
}
calc(5, '+', 1)