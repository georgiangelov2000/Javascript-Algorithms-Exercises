function solve(array) {
    let firstEl = 0;
    let lastEl = 0;
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        firstEl = array[0];
        lastEl = array[array.length - 1]
    }
    sum = firstEl + lastEl;
    console.log(sum)
}
solve([
    10, 20, 30
])