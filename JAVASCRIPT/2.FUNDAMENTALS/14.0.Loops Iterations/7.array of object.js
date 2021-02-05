let obj = [
    {
        firstName: 'George',
        lastName: 'Angelov',
    },
    {
        firstName: 'Petar',
        lastName: 'Ivanov',
    },
    {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
    },
    {
        firstName: 'Sylvestre',
        lastName: 'Stallone',
    },
]

obj.forEach(element => {
    for (el in element) {
        console.log(`${el} -> ${element[el]}`)
    }
});

obj.forEach(element => {
    console.log(`${element.firstName} : ${element.lastName}`)
});