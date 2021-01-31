function first(array) {
    let newArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i])
    }
    console.log(newArr)
}
first([
    'George', 'Ivan', 'Nikolai'
])

function second(array2) {
    let output = ''
    for (let j = 0; j < array2.length; j++) {
        output = array2[j]
        console.log(` ${j} ->  ${output}`)
    }
}
second([
    'Stefan', 'Petar', 'Petran'
])

function third(arr) {
    for (let x = 0; x < arr.length / 2; x++) {
        let fEl = arr[x];
        let sEl = arr.length - 1 - x;
        arr[x] = arr[sEl];
        arr[sEl] = fEl
    }
    console.log(arr)
}
third([
    'george', 'ivanov'
])