function solve(arr1, arr2) {
    let res = arr1.concat(arr2).filter(function (val, index, self) {
        return self.indexOf(val) === index
    })
    console.log(res)
}
solve([1, 2, 3, 4, 5], [1, 3, 5, 6, 7])