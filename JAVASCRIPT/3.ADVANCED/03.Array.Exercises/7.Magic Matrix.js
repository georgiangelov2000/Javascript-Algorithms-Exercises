function solve(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let fR = array[i].reduce((a, b) => a + b, 0);
        let sR = array[i + 1].reduce((a, b) => a + b, 0)
        let fC = 0;
        let sC = 0;
        for (let j = 0; j < array.length; j++) {
            fC += array[i][j];
            sC += array[i + 1][j]
        }
        if (fR !== sR || fC !== sC) {
            return false
        } else {
            return true
        }
    }
}
let result = solve(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]

)
console.log(result)