function solve(arr, first, last) {
    let element = arr[first];
    arr.splice(first, 1);
    arr.splice(last, 0, element);
    console.log(arr)
}
solve([1, 2, 3, 4, 5], 0, 2)