function solve(array) {
    let n = Number(array[0]);
    let sum = 0;
    let index = 1;
    while (sum < n) {
        let currNumber = Number(array[index]);
        sum += currNumber;
        index++
        console.log(currNumber)
    }
    console.log(sum);
}
solve([
    '100',
    '10',
    '20',
    '30',
    '40'
])

function secondSolve(arr) {
    let newArr = Number(arr[0]);
    let index = 1;
    let result = 0;
    while (result < newArr) {
        let currentNumber = Number(newArr[index]);
        result += +currentNumber;
        console.log(currentNumber)
    }
    console.log(result)
}
solve([
    150,
    10,
    20,
    30,
    40,
    50,

])