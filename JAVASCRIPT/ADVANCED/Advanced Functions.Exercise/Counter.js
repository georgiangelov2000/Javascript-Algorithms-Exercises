function outer() {
    let counter = 0;

    return function inner() {
        return counter++;
    }

}
let res = outer();
console.log(res())
console.log(res())
