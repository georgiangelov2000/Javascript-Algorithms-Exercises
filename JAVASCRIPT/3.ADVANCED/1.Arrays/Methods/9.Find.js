function solve(array) {
    let found = array.find(function (el) {
        return el > 10
    })
    console.log(found)
}
solve([
    10, 20, 30, 40
])