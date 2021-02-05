function solve(string) {
    let lastThreeEl = ''
    let newString = ''
    if (string.length >= 3) {
        lastThreeEl = string.substr(string.length - 3);
        newString = lastThreeEl + string + lastThreeEl
        return newString
    } else {
        return string
    }

}
let result = solve('javascript');
console.log(result)