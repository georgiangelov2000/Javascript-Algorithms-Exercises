function solve(string, counter) {
    let newStr = ''
    string = string.substring(string.length - 3, string.length);
    for (let i = 0; i < counter; i++) {
        newStr += string
    }
    return newStr

}
console.log(solve('javascript', 4))
console.log(solve('js', 3));
console.log(solve('python', 2))