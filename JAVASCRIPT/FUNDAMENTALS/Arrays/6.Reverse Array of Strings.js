function solve(string) {
    let toString = string.toString();
    let outPut = 0;
    for (let i = toString.length - 1; i >= 0; i--) {
        outPut = `${toString[i]}`;
        console.log(outPut)
    }
}
solve([
    '-1 hi ho w'
])

function secSolve(arr) {
    for (let j = 0; j < arr.length / 2; j++) {
        let oldElement = arr[j];
        let prevElement = arr.length - 1 - j;
        arr[j] = arr[prevElement];
        arr[prevElement] = oldElement
    }
    console.log(arr)
}
secSolve([
    'a', 'b', 'c', 'd', 'e'
])