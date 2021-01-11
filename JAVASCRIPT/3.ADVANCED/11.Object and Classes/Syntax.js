class User {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(this.name)
    }
    information() {
        console.log(`Hi Im ${this.name} from Bulgaria`)
    }
}
console.log(typeof User)
let firstUser = new User('George');
firstUser.sayHi();
firstUser.information()