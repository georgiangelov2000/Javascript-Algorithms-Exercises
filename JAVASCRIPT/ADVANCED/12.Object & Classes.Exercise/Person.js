class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
let person = new Person('George', 'Angelov', 'angelov2000@abv.bg');
Person.prototype.toString = function personToString() {
    return `${this.firstName} ${this.lastName} ${this.email}`
}
console.log(person.toString());