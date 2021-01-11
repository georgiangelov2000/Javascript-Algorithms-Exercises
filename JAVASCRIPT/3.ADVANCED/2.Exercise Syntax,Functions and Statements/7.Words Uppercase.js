function solve(string) {
    string = string.split(' ');
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].toUpperCase();
    }
    return string.join(',')
}
let result = solve('hi how are you');
let secResult = solve('hello')
console.log(`${result} ||  ${secResult}`)