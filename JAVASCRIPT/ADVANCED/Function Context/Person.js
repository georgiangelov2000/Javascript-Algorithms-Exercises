class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value) {
        let pattern = /\w \w/;
        if (pattern.test(value)) {
            let [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        } else {
            console.log('NO')
        }
    }
}
let person = new Person('Peter', 'Ivanov');
console.log(person.fullName);
person.firstName = 'George';
console.log(person.fullName);
person.lastName = 'Peterson'
console.log(person.fullName);
person.fullName = 'Nikola Tesla'
console.log(person.firstName)
console.log(person.lastName)