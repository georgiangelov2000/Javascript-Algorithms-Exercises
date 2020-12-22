function solve(string) {
    string = string.split('');
    let element = string[0];
    string[string.length - 1] = element;
    return string.join('');
}
let result = solve('something');
console.log(result)