function solve(input) {

    let storage = new Map();
    for (let line of input) {

        let tokens = line.split(' ');
        let [name, price] = tokens;
        price = Number(price);

        if (storage.has(price)) {
            let existing = storage.get(name)
            storage.set(name, existing + price);
        } else {
            storage.set(name, price)
        }
    }
    for (let [name, price] of storage) {
        console.log(`${name} => ${price}`)
    }
}
solve([
    'tomatoes 10',
    'coffe 5',
    'olives 100',
    'coffe 40'
])