class Person {
    constructor(name, canFly) {
        this.name = name;
        this.canFly = canFly
    }
    speak() {
        console.log(`Hello my name is ${this.name}`)
    }
}

class Programmer extends Person {

    constructor(name, canFly = true) {
        super(name, canFly)
    }

    coding() {
        console.log(`Hello World! My name is ${this.name} and I ${this.canFly ? 'can ':'cant ' }fly !`)
    }

}



let georgiProgramista = new Programmer('Georgi', false);
let peshoProgramista = new Programmer('Pesho', true);
let ivanProgramista=new Programmer('Ivan');
georgiProgramista.coding();
peshoProgramista.coding();
ivanProgramista.coding();
georgiProgramista.speak();
