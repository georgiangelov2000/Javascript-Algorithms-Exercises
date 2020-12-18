let phoneBook = {
    'George': '0896831628',
    'Ivan': '0896831621'
}
let entries = Object.entries(phoneBook)
console.log(JSON.stringify(entries));
let firstEntry = entries[0];
console.log(firstEntry);
console.log(firstEntry[0] + ' ' + firstEntry[1]);

//in function
function myFunction(array) {
    for (let line of array) {
        let tokens = line.split(":");
        let names = tokens[0];
        let num = tokens[1];
        console.log(names);
        console.log(num);
    }
    
}
myFunction([
    'George:0896831628',
    'Ivan:0896831621'
])