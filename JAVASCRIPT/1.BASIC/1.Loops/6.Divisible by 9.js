function solve(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 9 == 0) {
            sum += +i;
            console.log(i)
        }
    }
    console.log(`The sum ${sum}`)
}
solve(100, 200)