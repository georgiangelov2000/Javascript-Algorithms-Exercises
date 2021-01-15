function solve(string) {
    let chars = 'Java';
    string=string.toLowerCase();
    chars=chars.toLowerCase();
    if (string.startsWith(chars)) {
        return string
    } else {
        return false
    }
}
let result=solve('Javascript')
console.log(result)