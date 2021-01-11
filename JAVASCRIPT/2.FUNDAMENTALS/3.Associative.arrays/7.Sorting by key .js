let assocArr = {
    'one': '1',
    'two': '2',
    'three': '3'
}

let entries = Object.entries(assocArr);
entries.sort((a, b) => {
    let keyA = a[0];
    let keyB = b[1]
    console.log(keyA);
    console.log(keyB)
})

//in function
function solve(array) {
    let assArr = {};
    for (let line of array) {
        let tokens = line.split(':');
        let str = tokens[0];
        let num = tokens[1];
        assArr[str] = num;
    }
    let entries = Object.entries(assArr);
    entries.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[1];
        return keyA.localeCompare(keyB);
    })
    for(let [str,key]of entries){
        console.log(`${str} -> ${key}`)
    }
}
solve([
    'one:1',
    'three:3',
    'two:2'
])