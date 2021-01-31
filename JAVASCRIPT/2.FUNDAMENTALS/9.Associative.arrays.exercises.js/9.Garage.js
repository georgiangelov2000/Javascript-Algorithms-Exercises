function solve(array) {
    let garage = {};
    for (let line of array) {
        let tokens = line.split('-');
        let number = tokens.shift();
        let carInfo = tokens;
        if (!garage.hasOwnProperty(number)) {
            garage[number] = [];
        }
        garage[number].push(carInfo);
    }
    for (let key in garage) {
        console.log(` ${key}->${garage[key]}`)
    }

}
solve(
    ['1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
    ]
)