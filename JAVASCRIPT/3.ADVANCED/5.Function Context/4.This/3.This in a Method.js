let person = {
    firstName: 'George',
    lastName: 'Angelov',

    fullName: function () {
        return this.firstName + " " + this.lastName
    },
    whatIsThis: function () {
        return this;
    }
}
console.log(person.fullName())
console.log(person.whatIsThis());
