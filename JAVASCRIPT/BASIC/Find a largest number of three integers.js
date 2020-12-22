function solve(a, b, c) {
    if (Number(a) > Number(b) && Number(a) > Number(c)) {
        return a
    } else if (Number(b) > Number(a) && Number(b) > Number(c)) {
        return b
    } else if (Number(c) > Number(a) && Number(c) > Number(b)) {
        return c
    }

}
let result = solve('3', '2', '1');
console.log(result)