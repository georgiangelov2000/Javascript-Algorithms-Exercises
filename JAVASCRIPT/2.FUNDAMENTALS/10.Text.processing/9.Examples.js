let first = "Hello I'am Javascript Developer"
console.log(first.indexOf('Javascript'));
console.log(first.lastIndexOf('oper'))

let second = 'George';
console.log(second.substring(5, 3));
console.log(second.substring(3, 5));
console.log(second.substr(0, 2));
console.log(second.substr(5, 3));
console.log(second.substr(2, 4));

let third = 'Hi men';
console.log(third.replace('men', 'George'))

let fourth = 'men Hi men men';
let found = fourth.includes('men');
while (found) {
    fourth = fourth.replace('men', 'pich');
    found = fourth.includes('men')
}
console.log(fourth)

function myFunction(str, start, count) {
    let result = str.substring(start, count + start);
    console.log(result)
}
myFunction('manchester', 2, 1)

let splitString = 'Im the best';
let tokens = splitString.split(' ').filter((el) => {
    return el.length > 2
})
console.log(tokens)

//
let secSplit = "How are you boy";
let resSplit = secSplit.split('boy').join('man');
console.log(resSplit);

function repeatFunction(rep) {
    return rep.repeat(6)
}
console.log(repeatFunction('**'))

function secRepeat(repeatString) {
    for (let i = 0; i <= repeatString.length; i++) {
        return repeatString.repeat(4)
    }
}
console.log(secRepeat('la'))

function thirdRep(repStr, n) {
    return repStr.repeat(n);
}
console.log(thirdRep('ba', 5))

let startEl = 'Javascript is programming language';
console.log(startEl.startsWith('Javascript'));
let endEl = 'Im the programmer';
console.log(endEl.endsWith('programmer'));