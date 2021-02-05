let student = {
    name: 'George',
    hasPen: true,

    write: function () {
        console.log(`My name is ${this.name}`)
    }

}

let newStudent1 = Object.create(student);
newStudent1.name = 'Petkancho'
newStudent1.write()
console.log(newStudent1.hasPen);