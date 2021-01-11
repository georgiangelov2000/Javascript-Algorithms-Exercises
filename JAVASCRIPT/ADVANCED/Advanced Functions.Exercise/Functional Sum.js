let f = (function () {
    let total = 0;
    return function sum(a) {
        total += a;
        sum.toString = () => total;
        return sum
    }
})();
console.log(f(1));
console.log(f(1)(5)(-3));