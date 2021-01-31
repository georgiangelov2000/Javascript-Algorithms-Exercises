function solve(array) {
    if (array.length === 1) {
        return array[0, array[array.length-1]]
    } else {
        return array.pop() + solve(array);
    }
}
let result = solve([1, 2, 3, 4, 5]);
console.log(result)