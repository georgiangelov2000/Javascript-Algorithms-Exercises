let person = {
    firstName: 'George',
    lastName: 'Ivanov',
    age: 22,
    grades: [2, 5, 4, 6],

    school: {
        name: '51-SOU',
        maxGrade: 12,
        addres: 'str...',
        printReport:function(){
            console.log(`School name is  ${this.name}  `)
        }
    },

    reportGrades: function () {
        console.log(`My grades are ${this.grades.join(',')}`)
    },
    toString: function () {
        return `My name is ${this.firstName} ${this.lastName} and I study in ${this.school.name}`
    }

}

person.location = {
    latitude: 48.22,
    longtitude: 23.52
}

// console.log(`${person.firstName} - studies at ${person.school.name} school`);
person.reportGrades();
console.log('report:' + person);
person.school.printReport();