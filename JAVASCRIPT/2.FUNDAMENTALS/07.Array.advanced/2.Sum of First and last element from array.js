function solve(array) {
    let result = Number(array.shift()) + Number(array.pop());
    console.log(result)
}
solve([
    '1', '2', '3', '4', '5'
])