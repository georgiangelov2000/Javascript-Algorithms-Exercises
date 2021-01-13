let person = {
    firstName: 'George',
    lastName: 'Ivanov',
    age: 22,
    school: {
        name: '51-SOU',
        maxGrade: 12,
        addres: 'str...'
    }
}

person.location={
    latitude:48.22,
    longtitude:23.52
}

console.log(`${person.firstName} - studies at ${person.school.name} school`);

console.log(person)