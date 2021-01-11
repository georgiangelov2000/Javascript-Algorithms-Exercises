function solve(array) {
    let firstEl = array.shift();
    console.log( array.slice(0, firstEl).join(' '));
    console.log(array.slice(array.length - firstEl, array.length).join(' '));
}
solve([
    3, 6, 7, 8, 9
])