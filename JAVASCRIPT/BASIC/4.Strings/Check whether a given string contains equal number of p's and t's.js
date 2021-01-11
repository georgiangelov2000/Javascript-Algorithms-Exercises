function solve(string) {
    let pCou = '';
    let tCou = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i].includes('p')) {
            pCou += string[i]
        }
        if (string[i].includes('t')) {
            tCou += string[i]
        }
    }
    if (pCou.length === tCou.length) {
        return true;
    } else {
        return false
    }

}
console.log(solve('paatpss'))
console.log(solve('pptt'))