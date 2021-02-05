function solve() {
    class Figure {
        units = 'cm';

        changeUnits(unit) {
            this.units = unit
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super()
            this.radius = radius
        }
        get area() {
            let currentRadius = this.units == 'mm' ? this.radius * 10 : this.radius;
            return Math.PI * currentRadius ** 2;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius} `;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super()
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    let c = new Circle(5);
    console.log(c.area);
    console.log(c.toString());

    c.changeUnits('mm');
    console.log(c.area);
    console.log(c.toString())


    let r = new Rectangle(3, 4,'mm');
    console.log(r.area); 
    console.log(r.toString());
};
solve();