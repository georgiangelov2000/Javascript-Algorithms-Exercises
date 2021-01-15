function solve(array,n) {
    for (let i = 0; i < array.length; i++) {
        return array.slice(0, n);
    }
}
let result=solve([1,2,3,4,5],3);
let secondResult=solve([1,2,3,4,5,6,7,8,9],4);
console.log(`${result}\n${secondResult}`)