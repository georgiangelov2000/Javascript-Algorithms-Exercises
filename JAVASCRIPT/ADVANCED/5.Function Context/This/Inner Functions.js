function outer() {
    console.log(this)

    function inner() {
        console.log(this)
    }
    inner()
}

let obj = {
    name: 'george',
    func: outer
}
obj.func();


function myFunction() {
    console.log(this);
}
let my0bj = {
    firstName: 'George',
    lastName: 'Angelov',
    funct: myFunction
}
my0bj.funct();