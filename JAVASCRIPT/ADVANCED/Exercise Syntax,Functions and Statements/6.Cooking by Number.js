function solve(arr) {
    let number = Number(arr.shift());
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'chop') {
            number /= 2;
        } else if (arr[i] == 'dice') {
            number = Math.sqrt(number)
        } else if (arr[i] == 'spice') {
            number ++;
        } else if (arr[i] == 'bake') {
            number *= 3;
        } else if (arr[i] == 'fillet') {
            number *= 0.80
        }
        console.log(number)
    }
}
solve([
    '32', 'chop', 'chop', 'chop', 'chop', 'chop'
])
