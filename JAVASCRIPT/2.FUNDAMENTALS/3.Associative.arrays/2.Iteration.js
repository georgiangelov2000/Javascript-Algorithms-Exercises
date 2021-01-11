let assocArr = {
    'one': '1',
    'two': '2',
    'three': '3'
}
for (let key in assocArr) {
    console.log(key + " = " + assocArr[key]);
}

// in function

function solve(array) {
    let assArr = {};
    for (let line of array) {
        let tokens = line.split(':');
        let names = tokens[0];
        let numbers = tokens[1];
        assArr[names] = numbers;
    }
    for (let element in assArr) {
        console.log(`${element} -> ${assArr[element]} `)
    }
}
solve([
    'one:1',
    'two:2',
    'three:3',
])