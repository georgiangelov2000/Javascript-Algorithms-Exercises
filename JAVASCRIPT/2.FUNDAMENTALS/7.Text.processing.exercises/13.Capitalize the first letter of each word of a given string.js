function solve(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
console.log(solve('hello george'))

function secSolve(str) {
    let newStr = str.replace(str[0], str[0].toUpperCase());
    return newStr
}
console.log(secSolve('javascript language'))