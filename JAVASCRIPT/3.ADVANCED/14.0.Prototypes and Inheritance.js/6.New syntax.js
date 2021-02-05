class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }

    area() {
        return this.width * this.height
    }

}
let rectangle1=new Rectangle(5,4);
console.log(rectangle1.area());