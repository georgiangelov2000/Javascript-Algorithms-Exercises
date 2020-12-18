function solve(budget, season, numberOfFishman) {
    let price = 0;
    let result=0
    if (season == 'Sping') {
        price = 3000;
    } else if (season == 'Summer' || season==='Autumn') {
        price = 4200;
    } else if (season == 'Winter') {
        price = 2600;
    }

    if (numberOfFishman <= 6) {
        price *= 0.9;
    } else if (numberOfFishman > 7 && numberOfFishman <= 11) {
        price *= 0.85;
    } else if (numberOfFishman > 12) {
        price *= 0.75
    } else if (numberOfFishman % 2 == 0)
        if (season !== 'Autumn') {
            price *= 0.95
        }

    if (budget >= price) {
        result=budget-price;
        console.log(`Yes you have money ${result} leva left`)
    } else {
        result=budget-price
        console.log(`not enought money ! You need ${Math.abs(result)} leva`)
    }

}
solve(3600, 'Autumn', 6)