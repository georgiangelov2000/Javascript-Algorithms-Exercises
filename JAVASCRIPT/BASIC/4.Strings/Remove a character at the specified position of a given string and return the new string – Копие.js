function solve(string, index) {
    let str1 = string.substring(0, index);
    let str2=string.substring(index+1,string.length);
    return str1+str2
}
let result=solve('georgi', 3)
console.log(result)