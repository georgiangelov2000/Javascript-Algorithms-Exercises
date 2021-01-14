function solve(string) {
    let firstThreeChars = string.substring(0, 3);
    firstThreeChars = firstThreeChars.toUpperCase();
    let firstPart = 0;
    let lastPart = 0
    if (firstThreeChars === firstThreeChars.toUpperCase()) {
        firstPart = firstThreeChars.toLowerCase();
        lastPart = string.substring(3, string.length);
        return firstPart + lastPart
    }
}
console.log(solve('PYTHON'))