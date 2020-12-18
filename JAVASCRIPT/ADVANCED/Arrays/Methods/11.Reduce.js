function solve(array) {
    let red = array.reduce((acc, val) => acc + val);
    console.log(red)
}
solve([
    1, 2, 3, 4, 5
])


function secSolve(arr) {
    let sum = arr.reduce((acc, value, i, arr) => {
        acc += value;
        if (i === arr.length - 1) {
            return acc / arr.length - 1
        } else {
            return  acc
        }
    })
    console.log(`Average number is ${sum}`)
}
secSolve([
    30, 50, 60, 70
])