function solve(array) {
    array.sort((current, next) => {
        if (current.length > next.length) {
            return 1
        } else if (current.length === next.length) {
            return current > next
        } else {
            return -1
        }
    }).forEach(e => console.log(e));
}
solve(
    ['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George'
    ]

)