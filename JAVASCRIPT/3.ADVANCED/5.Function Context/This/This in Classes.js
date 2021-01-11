class Person {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = function () {
            console.log (`${this.firstName} ${this.lastName}`)
        }
    }
}

let person = new Person('Georgi', 'Angelov');
person.fullName()