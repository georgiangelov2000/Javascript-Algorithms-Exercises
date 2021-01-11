function solve(array) {
    array.forEach(element => {
        console.log(element)
    });
}
solve([
    'george', 'ivan', 'nikolai'
])

function secSolve(arr) {
    arr.forEach((el, i, ) => {
        console.log(`${el}->${i}`)
    })
}
secSolve([
    'george', 'ivan', 'nikolai'
])

function thirdSolve(ar) {
    ar.forEach((el, i) => {
        if (i == 0) {
            console.log(el)
        }
    })
}
thirdSolve([
    'george', 'ivan', 'nikolai'
])