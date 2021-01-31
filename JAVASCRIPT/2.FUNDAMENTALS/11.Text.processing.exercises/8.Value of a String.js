function solve(string, keyWord) {
    let sum = 0
    for (let i = 0; i < string.length; i++) {
        if (keyWord == 'LOWERCASE') {
            if (string[i] == string[i].toLowerCase()) {
                sum += string[i].charCodeAt();
            }
        } else if (keyWord == 'UPPERCASE') {
            if (string[i] == string[i].toUpperCase()) {
                sum += string[i].charCodeAt();
            }
        }
    }
    console.log(sum)
}
solve('AC/DC', 'UPPERCASE')