function solve(array) {
    let counter = array.pop();
    for (let i = 0; i <= counter.length; i++) {
        let lastEl = array.pop();
        array.unshift(lastEl)
    }
    console.log(array.join(' '));
}
solve(['1',
    '2',
    '3',
    '4',
    '2'
])