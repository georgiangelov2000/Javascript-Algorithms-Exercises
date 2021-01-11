function solve(array) {
    let towns = {};
    for (let el of array) {
        let [city, population] = el.split(' <-> ');
        if (!towns.hasOwnProperty(city)) {
            towns[city] = 0
        }
        towns[city] += Number(population)

    }
    for (let key in towns) {
        console.log(`${key} ${towns[key]}`)
    }
}
solve(['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]

)