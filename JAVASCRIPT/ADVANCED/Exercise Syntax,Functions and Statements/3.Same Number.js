function solve(number) {
    number = number.toString();
    let sum = 0;
    let result = '';
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i])
        if (number[0] !== number[i]) {
            result = false;
        } else [
            result = true
        ]
    }
    return ` ${result} -> ${sum}`
}
let result = solve(2222222);
console.log(result)