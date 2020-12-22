function solve(string) {
    string=string.split('')
    let temp = string[0];
    string[0] = string[string.length - 1];
    string[string.length - 1] = temp
    return string.join('')
}
let result = solve('swift')
console.log(result)