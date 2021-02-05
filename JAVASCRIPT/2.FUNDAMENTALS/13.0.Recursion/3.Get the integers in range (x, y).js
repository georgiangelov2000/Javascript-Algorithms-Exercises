function solve(x, y) {
    if (y - x === 2) {
        return [x + 1];
    } else {
        let list = solve(x, y - 1)
        list.push(y - 1);
        return list
    }
}
console.log(solve(1, 10))