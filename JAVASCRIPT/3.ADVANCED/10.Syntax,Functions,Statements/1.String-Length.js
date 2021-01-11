function solve(first, second, third) {
    let newArray = [];
    let sum = 0;
    let averageSum = 0;
    newArray.push(first, second, third);
    for (let i = 0; i < newArray.length; i++) {
        sum += newArray[i].length
        averageSum = Math.floor(sum / 3)
    }
    return (`${sum}->${averageSum}`)

}
let result = solve('chocolate', 'ice gream', 'cake')
console.log(result)