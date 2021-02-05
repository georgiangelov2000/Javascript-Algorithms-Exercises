function solve(str1, str2, string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() > str1.charCodeAt() && string[i].charCodeAt() < str2.charCodeAt()) {
            sum += string[i].charCodeAt();
        } else if (string[i].charCodeAt() > str2.charCodeAt() && string[i].charCodeAt() < str1.charCodeAt()) {
            sum += string[i].charCodeAt();
        }
    }
    console.log(sum)

}
solve('?','E','@ABCEF');