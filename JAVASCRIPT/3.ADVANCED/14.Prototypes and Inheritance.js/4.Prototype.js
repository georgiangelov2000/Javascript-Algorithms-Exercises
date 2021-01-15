function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName
}

Person.prototype.speak=function(){
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
}

let person1=new Person('Pesho','Georgiev');
let person2=new Person('Stoicho','Mladenov')

person1.speak();
person2.speak()