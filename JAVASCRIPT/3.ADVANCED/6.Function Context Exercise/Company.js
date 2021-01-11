class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(username, salary, position, department) {
        for (let arg of [username, salary, position, department]) {
            this.validate(arg)
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({
            username,
            salary,
            position,
            department
        })

        console.log(`New employee is hired.Name ${username}.Position ${position}`)
    }

    bestDepartment() {
        let departments = {};
        Object.entries(this.departments).forEach(([department, employees]) => {
            let totalSalary = employees.map(e => e.salary).reduce((acc, curr) => acc += curr)
            departments[department] = totalSalary / employees.length;
        });

        let maxSalary = 0;
        let bestDepartment;
        Object.entries(departments).forEach(([department, avgSalary]) => {
            if (avgSalary > maxSalary) {
                maxSalary = avgSalary;
                bestDepartment = department;
            }
        });

        let output=`Best Department is: ${bestDepartment} \n Average salary : ${departments[bestDepartment].toFixed(2)}\n`;
        
        this.departments[bestDepartment]
            .sort((a, b) => b.salary - a.salary || b.username.localeCompare(a.username))
            .forEach(e => {
                output+=`${e.username} ${e.salary} ${e.position}\n `
            })
            return output
    }

    validate(value) {
        if (!value || value < 0) {
            throw new Error('Invalid Input')
        }
    }
}

function solve() {
    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c.bestDepartment());
}
solve()