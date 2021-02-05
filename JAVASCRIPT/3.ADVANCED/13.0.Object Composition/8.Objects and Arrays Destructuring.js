let employees = [{
        name: 'John',
        position: 'worker'
    },
    {
        name: 'Jane',
        position: 'secretary'

    }
]
let [{name}, {position}] = employees;
console.log(name, position);

for (let el of employees) {
    for (let element in el) {
        console.log(`Key:${element}-> Value:${el[element]}`)
    }
}

let firstObject;
let secondObject;

for(let i=0;i<employees.length;i++){
    firstObject=employees[0];
    secondObject=employees[1];
}

for(let line in firstObject){
    console.log(`${line}->${firstObject[line]}`)
}
for(secondLine in secondObject){
    console.log(`${secondLine}->${secondObject[secondLine]}`)
}


let company={
    emp:['John','Jan','Sam','Suzanne'],
    name:'ScaleFocus',
}
let{emp:[emplo]}=company;
console.log(`Employee is ` + emplo)