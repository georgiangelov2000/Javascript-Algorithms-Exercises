function sayHello() {
    return 'Hello'
}

function greeting(helloMessage, name) {
    return helloMessage() + name;
}
console.log(greeting(sayHello, ' Georgi'))


function greetingByName() {
    return 'Hello miss'
}

function greet(greet, name) {
    return greet() + name
}
console.log(greet(greetingByName, ' Ivana'))


let write = function () {
    return 'Hello George'
}
console.log(write())