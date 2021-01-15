function solve(array) {
    let result = array
    .filter((num, n) => n % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    return result
}
console.log(solve([
    10, 15, 20, 25
]))