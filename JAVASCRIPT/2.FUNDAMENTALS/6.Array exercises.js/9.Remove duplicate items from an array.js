function solve(array) {
    let uniqueChars = array.filter((value, index) => {
        return array.indexOf(value) !== index
    })
    console.log(uniqueChars)
}
let result = solve(['a', 'b', 'c', 'b', 'a'])
