function solve(n, array) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(array[i])
    }
    for (let i = newArray.length - 1; i >= 0; i--) {
        console.log(newArray[i])
    }
}
solve(4, [
    -1, 20, 99, 5
])
