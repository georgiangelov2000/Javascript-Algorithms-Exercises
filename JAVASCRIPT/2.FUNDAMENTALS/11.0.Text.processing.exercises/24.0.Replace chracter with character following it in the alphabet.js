function solve(string) {
    let strOut = ''
    for (let i = 0; i < string.length; i++) {
        if (96 <= string.charCodeAt(i) && string.charCodeAt(i) <= 122) {
            strOut += String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
    return strOut
}
console.log(solve('python'))