function solve(array) {
    let assArr={};
    for(let el of array){
        let inPieces=el.split(' , ');
        let day=inPieces[0];
        let name=inPieces[1];
        assArr[day]=name;
        for(let [key,value] of Object.entries(assArr)){
            console.log(`${key}->${value}`)
        }
    }
}
solve([
    'day , Monday',
    'day , Tuesday',
    'day , Wednesday',
    'day , Thursday',
    'day , Friday',

])