function solve(array) {
    let personInfo={};
    for(let el of array){
        let line =el.split(':');
        let [fullName,number]=line;
        //Destructuring 
        //Associative
        personInfo[fullName]=number
    }
    
    for(let currentElement in personInfo){
        console.log(`${currentElement}-> ${personInfo[currentElement]}`)
    }

}
solve([
    'Georgi Angelov:0896831628',
    'Nikola Jekov:0896831624',
    'Stanimir Petrov:0896831623',
])