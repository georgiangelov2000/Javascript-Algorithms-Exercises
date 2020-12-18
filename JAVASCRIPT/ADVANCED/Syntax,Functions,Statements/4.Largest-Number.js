function solve(first, second, third) {
    let newArray = [];
    newArray.push(first, second, third);
    let largestNum = 0;
    for (let i = 0; i < newArray.length; i++) {
        let element = newArray[i]
        if (element > largestNum) {
            largestNum = element
        }
    }
    return `The largest number is ${largestNum}`
}
let result = solve(5, -3, 16);
console.log(result)

function secondSolve(a, b, c) {
    let solving = Math.max(a, b, c);
    return solving
}
let res = secondSolve(1, 5, 4)
console.log(res)
