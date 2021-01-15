function solve(strings) {
    //output country name/town name/travel cost
    let destinations = {};
    for (let line of strings) {
        let [country, town, price] = line.split(' > ');
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }
        if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = price
        }
        let curPrice = destinations[country][town];
        if (curPrice > price) {
            destinations[country][town] = price
        }
    }
    let orderedCountries = [...Object.keys(destinations)].sort((a, b) => {
        a.localeCompare(b)
    })
    let result = '';
    for (let country of orderedCountries) {
        result+=country+"->";
        let sortedPrice = [...Object.keys(destinations[country])].sort((a, b) => traveCost(a, b, destinations, country));
        for (let town of sortedPrice) {
            result += `${town}->${destinations[country][town]}`
        }
        result += '\n'
    }
    console.log(result)

    function traveCost(town1, town2, destinations, country) {
        let priceOne = destinations[country][town1];
        let priceTwo = destinations[country[town2]];
        return priceOne - priceTwo
    }

}
console.log(solve(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
))