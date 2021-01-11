function solve(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' && string[i + 3] === 'b') {
            return true;
        } else {
            return false
        }
    }
}
console.log(solve('acdb'));
console.log(solve('acb'));
console.log(solve('aweb'))