function solve(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let n = Number(array[i]);
        if (n < 0) {
            result.unshift(n);
        } else {
            result.push(n);
        }
    }
    console.log(result.join(','))
}
solve([
    '1', '-2', '-3', '4', '5'
])