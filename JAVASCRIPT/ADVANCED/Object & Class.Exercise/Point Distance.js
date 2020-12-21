class Points {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
    static distance(x1, x2) {
        let findX = Math.abs(x1.x - x2.x);
        let findY = Math.abs(x1.y - x2.y);
        let res = Math.sqrt(findX ** 2 + findY ** 2)
        return res;
    }
}
let x1 = new Points(5, 5);
let x2 = new Points(9, 8);
console.log(Points.distance(x1, x2));