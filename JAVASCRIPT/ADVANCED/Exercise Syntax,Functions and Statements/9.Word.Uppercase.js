function solve(string) {
    string = string.split(' ');
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); 
    }
    return string.join(',');
}
let result = solve('hello im george');
console.log(result)