function solve(array) {
    let result = array.map(x => x.length);
    console.log(result)
}
solve([
    'one', 'two', 'three', 'four'
])

function secSolve(arr) {
    let nums = arr.map(Number);
    let incremenet = nums.map(x => x + 1);
    console.log(incremenet)
}
secSolve([
    '1', '2', '3', '4'
])


