let student2 = {
    name: 'George',
    hasPen: true,

    write: function () {
        console.log(`My name is ${this.name}`)
    }

}

let student1 = {
    name: 'Ivancho'
}

Object.setPrototypeOf(student1, student2);
student1.write();
console.log(student1.hasPen);