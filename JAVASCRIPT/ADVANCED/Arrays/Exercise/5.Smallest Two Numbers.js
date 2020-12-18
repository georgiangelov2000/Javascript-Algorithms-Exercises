function solve(array) {
    let sorted = array.sort((a, b) => {
        return a - b;

    })
    let smallestNumber = `${sorted[0]} , ${sorted[1]}`
    console.log(smallestNumber)
}
solve([
    30, 15, 50, 5
])


function secSolve(arr) {
    let firstSmallNumber = arr[0];
    let secondSmallNumber = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstSmallNumber) {
            firstSmallNumber = arr[i]
        } else if (arr[i] < secondSmallNumber) {
            secondSmallNumber = arr[i]
        }
    }
    console.log(firstSmallNumber)
    console.log(secondSmallNumber)

}
secSolve([7, 1, 2, 3, 4, 5])