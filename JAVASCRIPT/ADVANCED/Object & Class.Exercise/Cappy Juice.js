function solve(array) {
    let result = {};
    let juicesInOrder = {};
    array.forEach(element => {
        let [product, quantity] = element.split(' => ');

        if (!result[product]) {
            result[product] = Number(quantity)
        } else {
            result[product] += Number(quantity)
        }
        if (result[product] >= 1000) {
            juicesInOrder[product] = 0
        }
    });

    Object.keys(result).forEach(j => {
        if (juicesInOrder[j]!== undefined) {
            juicesInOrder[j] += parseInt(result[j] / 1000);
        }
    })

    Object.keys(juicesInOrder).forEach(j => console.log(`${j}=>${juicesInOrder[j]}`))
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])