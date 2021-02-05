function people() {

    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let task = this.tasks.shift();
            console.log(`${this.name} ${task}`);
            this.tasks.push(task)
        }

        getSalary() {
            return this.salary
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this mouth`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks.push(`is working on a simple task .`)
        }
    }

    class Serior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working  on a complicated task.');
            this.tasks.push('is taking time off work');
            this.tasks.push('is supervising junior workers')
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push('scheduled a meeting');
            this.tasks.push('is prepareting a quaterly report');
        }
        getSalary() {
            return super.getSalary() + this.dividend
        }
    }

    return {
        Employee,
        Junior,
        Serior,
        Manager
    }
}
let empls=people();
let Employee=empls.Employee;
let Junior=empls.Junior;
let Senior=empls.Serior;
let Manager=empls.Manager;

let junior=new Junior('Steven',24);
let senior=new Senior('Peterson',21);
let manager=new Manager('Manager',55);
console.log(junior);
console.log(senior);
console.log(manager)