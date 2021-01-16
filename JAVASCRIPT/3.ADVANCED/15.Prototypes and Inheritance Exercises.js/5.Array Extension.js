(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }

    Array.prototype.skip = function (n) {
        let result = [];

        for (let i = n; i < this.length; i++) {
            result.push(this[i])
        }
        return result;
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => acc += curr,0);
    }

    Array.prototype.average=function(){
        return this.sum()/this.length;
    }

})()
let array = [1, 2, 3];
console.log(array.last());
console.log(array.skip(1));
console.log(array.take(2));
console.log(array.sum());
console.log(array.average());