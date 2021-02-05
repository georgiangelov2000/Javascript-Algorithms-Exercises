function solve(array, n) {
    for (let i = 0; i < array.length; i++) {
       return array.slice (Math.max(array.length-n,0));
    }
}
let firstResult = solve([1, 2, 3, 4, 5], 3);
console.log(firstResult)