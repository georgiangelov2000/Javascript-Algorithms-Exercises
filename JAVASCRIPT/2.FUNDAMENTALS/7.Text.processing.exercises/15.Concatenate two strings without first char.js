function solve(str1, str2) {
    str1 = str1.substring(1);
    str2 = str2.substring(1);
    return str1.concat(str2)
}
console.log(solve('george', 'nikolai'))