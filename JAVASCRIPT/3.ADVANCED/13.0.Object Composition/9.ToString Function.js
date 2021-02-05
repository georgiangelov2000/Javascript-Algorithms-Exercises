let rect = {
    width: 10,
    height: 4,
    toString: function () {
        return `rect[${this.width} x ${this.height}]`;
    }
};
console.log(rect);
console.log(rect.toString());
console.log('' + rect)