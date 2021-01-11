function makeWorker(fName) {
    let firstName = fName;
    return function (secondName) {
        return firstName + secondName
    }
}

let result = makeWorker(' George');
console.log(result(' Angelov'))


function worker() {
    let firstName = ' Steven';
    let lastName = ' Petkov';

    return function () {
        console.log(firstName + lastName);
    }
}
let someWorker = worker();
someWorker()

