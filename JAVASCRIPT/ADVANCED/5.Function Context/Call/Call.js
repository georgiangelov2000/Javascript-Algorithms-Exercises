function greet() {
    console.log(this.name)
}
let person = {
    name: 'George'
};
greet.call(person);