function first(array) {
    let newArray = [];
    for (let i = 0; i <= array.length; i++) {
        let element = array[i];
        if (i % 2 == 0) {
            newArray.push(`${i} -> ${element}`)
        } else {
            false
        }
    }
    console.log(newArray)
}
first([
    'George', 'Ivan', 'Nikolai'
])

function second(arr) {
    let newArr = [];
    let firstElement = '';
    let lastElement = ''
    for (let j = 0; j <= arr.length; j++) {
        firstElement = arr[1];
        lastElement = arr[arr.length - 1]
    }
    newArr.push(firstElement, lastElement)
    console.log(newArr)

}
second([
    10, 20, 30
])

function third(secArr) {
    let firstEl=''
    let massive=[];
    for (let j = 0; j <=secArr.length; j++) {
        firstEl=secArr[1];
    }
    for(let x=firstEl.length-1;x>0;x--){
       massive.push(firstEl[x]);
    }
    console.log(massive)
}
third([
    "first", 'second'
])