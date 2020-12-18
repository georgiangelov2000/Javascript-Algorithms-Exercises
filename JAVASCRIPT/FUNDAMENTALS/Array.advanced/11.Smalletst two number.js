function solve(array) {
    array.sort((a, b) => a - b);
    console.log(array)
    let result = array.slice(0, 2);
    console.log(result)
}
solve([
    1, 5, 4, 2, 6, 7
])