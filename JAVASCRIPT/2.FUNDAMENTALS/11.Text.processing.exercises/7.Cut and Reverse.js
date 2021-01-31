function solve(string) {
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i]
    }
    let middle = (reverseString.length / 2);
    let first = reverseString.lastIndexOf('', middle);
    let last = reverseString.indexOf('', middle + 1)
    if (middle - first < last - middle) {
        middle = first
    } else {
        middle = last
    }
    let s1 = reverseString.substr(0, middle);
    let s2 = reverseString.substr(middle + 1);
    console.log(`${s1} \n ${s2}`)
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')
