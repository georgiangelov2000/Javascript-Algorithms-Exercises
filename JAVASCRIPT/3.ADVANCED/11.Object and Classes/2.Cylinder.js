class Cylinder {
    constructor(height, diameter) {
        this.diameter = diameter;
        this.height = height;
    }
    volume() {
        let radius = this.diameter / 2;
        return this.height * Math.PI * radius * radius
    }
}
let cyl = new Cylinder(7, 4);
console.log(cyl.volume().toFixed(4))