function solve(string) {
    let string2 = string.toLowerCase();
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string2[i] !== string[i]) {
            result += ' ' + string[i]
        } else {
            result += string2[i]
        }
        result.split(',')
    }
    console.log(result)
}
solve('ImFromBulgariaImTwentyYearsOld')