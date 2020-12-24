function solve(string) {
    let firstMiddle = string.slice(string[0], string.length - 3);
    let lastThreeChars = string.slice(string.length - 3, string.length)
    let newString = lastThreeChars + firstMiddle;
    return newString
}
console.log(solve('python'))