function solve(array){
    for(let element of array ){
        let line=element.split(',');
        let[firstName,secondName]=line;
        console.log(firstName)
        console.log(secondName)
    }
}
solve([
    'Georgi,Angelov',
    'Nikola,Jekov',
    'Stanimir,Petrov',
])