function solve() {
    class Person{
        constructor(fName,lName,age,email){
            this.fName=fName;
            this.lName=lName;
            this.age=age;
            this.email=email
        }

        toString(){
            return `${this.fName} ${this.lName} ${this.age} ${this.email}`
        };
    };

  let persons=[];
    persons.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    persons.push(new Person('Softuni'));
    persons.push(new Person('Stephan', 'Johnson', 25, ));
    persons.push(new Person('Gabriel', 'Peterson', 25, 'g-p@gmail.com'));
    return persons;
}
console.log(solve())