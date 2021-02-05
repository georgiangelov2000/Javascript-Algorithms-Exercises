function solve(array) {
    array.sort((a, b) => a - b);
    console.log(array)
}
solve([
    20, 10, 50, 30, 40
])

function secSolve(arr) {
    arr.sort((a, b) => b - a);
    console.log(arr)
}
secSolve([20, 10, 50, 30, 40])

function thirdSolve(ar) {
   ar.sort((a,b)=>a.localeCompare(b));
   console.log(ar)
}
thirdSolve([
    'ivan', 'nikolai', 'george', 'stamat'
])