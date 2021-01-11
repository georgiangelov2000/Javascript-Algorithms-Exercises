function solve(input) {
    let newArray = [];
    let number = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            newArray.push(number);
        } else if (input[i] === 'remove') {
            newArray.pop();
        }
        number++
    }

    if (newArray.length == 0) {
        console.log('Empty')
    } else {
        console.log(newArray.join('\n'))
    }
}
solve(['add',
        'add',
        'add',
        'add'
    ]
)