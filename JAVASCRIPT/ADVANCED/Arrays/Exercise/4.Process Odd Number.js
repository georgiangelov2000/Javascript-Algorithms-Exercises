function solve(array) {
    let res = array.filter((el, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    console.log(res)

}
solve([10,15,20,25])