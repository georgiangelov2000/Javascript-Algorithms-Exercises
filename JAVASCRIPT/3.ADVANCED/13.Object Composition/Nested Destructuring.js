let department = {
    name: 'Engineering',
    data: {

        director: {
            name: 'John',
            position: 'Engineering Directior'
        },
        manager: {
            name: 'Petar',
            position: 'Engineering manager'
        },

        employees: [],
        company: 'Mentor Mate'
    }

}

let {
    data: {
        director
    },
    data: {
        manager
    }
} = department;

for (let currentElement in director) {
    console.log(`${currentElement}->${director[currentElement]}`)
}

for (let element in manager) {
    console.log(`${element}->${manager[element]}`)
}