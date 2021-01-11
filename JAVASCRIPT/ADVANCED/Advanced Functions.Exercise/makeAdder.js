function makeAdder(x) {
    return function (y) {
        return x + y
    }
}
let add = makeAdder(5);
let add2 = makeAdder(10);

console.log(add(2));
console.log(add2(10));

