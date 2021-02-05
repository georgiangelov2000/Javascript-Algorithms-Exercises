function solve(array) {
    let parsed = JSON.parse(array);
    for (let el in parsed) {
        console.log(`${parsed[el]} `)
    }
    console.log(Object.values(parsed))
}
solve([
    '{"red": "#FF0000", "green": "#00FF00", "white": "#FFFFFF"} '
])