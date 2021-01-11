function solve(array) {
    array.filter((el) => {
        console.log(el.toUpperCase());
    })
}
solve([
    'george', 'ivan'
])

function secSolve(arr) {
    arr.filter((value) => {
        console.log(value * 2)
    })
}
secSolve([
    10, 20, 30
])

function thirdSolve(ar) {
    ar.filter((value, index) => {
        if (index % 2 == 0) {
            console.log(`even - ` + value)
        } else if (index % 2 == 1) {
            console.log(`odd - ` + value)
        }
    })
}
thirdSolve([
    10, 20, 30, 40
])