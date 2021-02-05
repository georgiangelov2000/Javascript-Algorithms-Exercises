function solve(array) {
    let res = array.map((value) => {
        return value * 2
    })
    console.log(res)
}
solve([
    10, 20, 30, 40
])

function solving(arr) {
    let res = arr.map((value) => {
        if (value.length > 6) {
            return value;
        } else {
            return false
        }
    })
    console.log(res)
}
solving([
    'george', 'steven', 'petkan', 'nikolai'
])