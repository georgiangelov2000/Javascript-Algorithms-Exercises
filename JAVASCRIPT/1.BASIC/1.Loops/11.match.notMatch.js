function solve(input, output) {
    for (let i = input; i <= output; i++) {
        if (input >= 1 && output <= 10) {
            if (input == output) {
                return `matched ${input} ${output}`
            } else {
                return `not matched ${input} ${output}`
            }
        }else if(input>=1 && output>10 ){
            return 'The numbers not bigger than 10 '
        }
    }
}
let result = solve(5, 5);
let secResult = solve(5,11);
console.log(` ${result} \n ${secResult}`)