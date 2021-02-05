function solve(array) {
    let sum = 0;
    let product = 1;
    array.forEach(element => {
        sum += element
        product *= element
    });
    return `The sum is:${sum} -> The product is:${product}`
}
let result = solve([1, 2, 3, 4, 5, 6]);
console.log(result)