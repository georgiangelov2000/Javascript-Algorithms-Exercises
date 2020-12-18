function solve(array) {
    let resOfEl = 0;
    let concatEl = 0;
    let averageSum = 0;
    let element = ''
    for (let i = 0; i < array.length; i++) {
        element = array[i];
        resOfEl += element
        averageSum = resOfEl /array[i]
        concatEl = array.join('');
    }
    console.log(`Sum of el : ${resOfEl}`)
    console.log(`Average sum of el : ${averageSum}`)
    console.log(`Concat el : ${concatEl}`)
}
solve([
    1,2,3
])