let assocArr = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5'
}
/*
console.log(assocArr.hasOwnProperty('one'));
delete assocArr['one'];
console.log(assocArr.hasOwnProperty('one'));

for (let [key, value] of Object.entries(assocArr)) {
    console.log(`${key}-> ${value}`)
}
*/

//in function
function myFunction(array) {
    let assArr = {};
    for (let line of array) {
        let tokens = line.split(':');
        let names = tokens[0];
        let nums = tokens[1];
        if (assArr.hasOwnProperty(names)) {
            console.log(`Conflict ${names} `)
        }
        assArr[names] = nums;
        console.log(`Succesfully ${names} -> ${nums} `)
    }
    for (let element in assArr) {
        console.log(`${element}->${assArr[element]}`)
    }
}
myFunction([
    'one:1',
    'two:2',
    'three:3',
    'four:4',
    'five:5',
    'five:6',
])


//secondFunction