function solve(string) {
    let reversedString=''
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString
}
let result=solve('w3resource');
console.log(result)