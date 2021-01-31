function solve(array) {

    array.sort((a, b) => {
        a-b
    })
    return array
}
console.log(solve([
    1, 2, 3, 4, 5,
]))

function secSolve(arr){
    arr.sort((x,c)=>{
        x.localeCompare(c)
    })
    return arr
}
console.log(secSolve([
    'George','Ivan','Nikolai','Steven'
]))