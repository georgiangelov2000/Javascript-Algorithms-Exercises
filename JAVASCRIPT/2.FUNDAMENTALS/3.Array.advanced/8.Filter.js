function solve(array) {
    let result = array.filter(x => x.length > 3)
    console.log(result)
}
solve([
    'one', 'two', 'three', 'four'
])

function secSolve(arr) {
    let check = arr.filter(n => n % 2 == 0);
    console.log(check)
}
secSolve([
    1, 2, 3, 4, 5, 6
])