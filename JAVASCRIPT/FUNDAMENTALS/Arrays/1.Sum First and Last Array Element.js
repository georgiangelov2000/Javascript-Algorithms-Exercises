function solve(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = array[0] + array[array.length - 1]
    }
    console.log(result)

}
solve([
    20, 30, 40
])

