function solve(array) {
    let currentRow;
    let currentNumbers;
    for(let index in array){
        console.log(currentRow= `Current row ${index}`)
        for(let j in array[index]){
            console.log(currentNumbers=`${array[index][j]}`)
        }
    }
}
solve(
    [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ]
)
console.log(result)