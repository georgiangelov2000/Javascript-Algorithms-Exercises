function solve(array){
    for(let element of array ){
        let line=element.split(',');
        let firstName=line[0];
        let secondName=line[1]
        console.log(`First names - > ${firstName}`);
        console.log(`Second names - > ${secondName}`);
    }
}
solve([
    'Georgi,Angelov',
    'Nikola,Jekov',
    'Stanimir,Petrov',
])