
function solve(string, counter) {
    let newString = ''
    while (counter > 0) {
        newString += string;
        counter--
    }
    return newString
}
console.log(solve('abc', 5))
console.log(solve('abc', 0))


function secSolve(str, count) {
    let newStr = ''
    for (let i = count; i > 0; i--) {
        newStr += str
    }
    return newStr
}
console.log(secSolve('abc', 5))


function thirdSolve(word,num){
    let newStr='';
    for(let i=0;i<num;i++){
        newStr+=word
    }
    return newStr
}
console.log(thirdSolve('george',5))
