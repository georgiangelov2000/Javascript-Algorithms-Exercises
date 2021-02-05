function solve(object) {
    let parsed = JSON.parse(object);
    if (parsed.hasOwnProperty('red')) {
        console.log('true')
    } else {
        console.log('false')
    }
}
solve(
    '{"red": "#FF0000", "green": "#00FF00", "white": "#FFFFFF"}'
)