function solve(string) {
    let middle = ''
    if (string.length % 2 != 0) {
        middle = (string.length + 1) / 2;
        return string.slice(middle - 2, middle + 1);
    } else {
        return string
    }

}
console.log(solve('javascript'))
console.log(solve('exercises'))
console.log(solve('python'));
console.log(solve('php'));
console.log(solve('html5'))