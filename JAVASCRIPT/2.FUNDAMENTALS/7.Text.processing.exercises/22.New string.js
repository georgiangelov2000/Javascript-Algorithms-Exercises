function solve(string, chars) {
    let newString = chars + string;
    if (newString.startsWith(chars)) {
        return newString
    } else {
        return false
    }
}
let result = solve('thon', 'Py');
console.log(result)