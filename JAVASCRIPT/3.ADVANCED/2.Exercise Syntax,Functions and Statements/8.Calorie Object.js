function solve(array) {
    let obj = {};
    array.forEach(function (val, i) {
        if (i % 2 == 1) return;
        obj[val] = array[i + 1]
    })
    JSON.stringify(obj);
    console.log(obj)
}
solve(
    ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
)


