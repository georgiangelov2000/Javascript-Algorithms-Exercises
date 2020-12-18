function solve(array) {
    array.filter((el, i) => {
        if (i % 2 == 0) {
            console.log(`${el}`)
        } else {
            console.log(``)
        }
    })
}
solve([
    20, 30, 40
])

function secSolve(arr) {
    let res=''
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            res=`index ${i} : number ${arr[i]}`
            console.log(res)
        }
    }
}
secSolve([
    20, 30, 40
])