function solve(arr1, arr2) {
    arr1.concat(arr2).filter(function (val) {
        if (!(arr1.includes(val) && arr2.includes(val))) {
            console.log(val)
        }
    })
}
solve([1, 2, 3, 4], [1, 2, 3]);