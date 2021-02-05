function solve(array) {
    let output = ''
    for (let num of array) {
        output += `${num} `
    }
    console.log(output);
}
solve([
    1, 2, 3, 4, 5
])