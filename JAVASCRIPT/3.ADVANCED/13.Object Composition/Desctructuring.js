let department = {
    name: 'Engineering',
    data: {}
}
let {data} = department;
let objectList = [{
        key: 'value'
    },
    {
        key: 'value'
    },
    {
        key: 'value'
    },
]
let [obj, obj1, obj2] = objectList
console.log(obj1)


let school = {
    name: 'Sou Geo Milev',
    info: {

    }
}
let {info} = school;
let infoList = [{Village: 'Belozem',Area: 'Plovdiv'}, {Name: 'Sou Geo Milev',type: 'High School'}];
let [firstObj, secondObj] = infoList;

console.log(firstObj, secondObj);

for(let line in info){
    console.log(`${line}->${info[line]}`)
}

for (let el in firstObj) {
    console.log(`${el} -> ${firstObj[el]}`)
}

for(let element in secondObj){
    console.log(`${element}->${secondObj[element]}`)
}

