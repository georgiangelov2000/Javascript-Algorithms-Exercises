function solve(arr) {
    let firstSum = 0;
    let secondSum = 0;
    let elementIndex = 0;
    arr.forEach((row) => {
        firstSum += row[elementIndex];
        secondSum += row[row.length - 1 - elementIndex]
        elementIndex++
    })
    console.log(firstSum)
}
solve([
    [20, 40],
    [10, 60]
])