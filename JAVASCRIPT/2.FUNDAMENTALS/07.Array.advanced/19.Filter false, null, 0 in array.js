function solve(array) {
    let result = array.filter((value,index) => {
        if (value && index) {
            return `Value -> ${value}`
        }
    })
    console.log(result)
}
solve([null, false, true, 0, 1, 2, 3, 'asc'])