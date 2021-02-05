function solve(array) {
    let assArr = {};
    for (let el of array) {
        let inPieces = el.split(' : ');
        let key = inPieces[0];
        let value = inPieces[1]
        assArr[key] = value;
    }
    for (let el in assArr) {
        console.log(`${el} => ${assArr[el]}`)
    }
}
solve([
    "one : 1",
    "two : 2",
    "three : 3",
    "four : 4",
    "five : 5",
])