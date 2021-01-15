function solve(array) {
    let obj = {};
    for (let line of array) {
        obj[line] = 0;
    }
    console.log(obj);
    console.log(Object.keys(obj));
}
solve([
    'a', 'b', 'c'
])