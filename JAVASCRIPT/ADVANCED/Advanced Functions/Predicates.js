let array = [1, 14, 2, 21, 4, 54];
let found = array.find(isFound);

function isFound(element) {
    return element > 10
}
console.log(found)

//built-in


let users = [{
        name: 'George',
        age: '25'
    },
    {
        name: 'Sam',
        age: '30'
    },
    {
        name: 'Steven',
        age: '35'
    },
]
let getName = (user) => user.name;
let userNames = users.map(getName);
console.log(userNames)