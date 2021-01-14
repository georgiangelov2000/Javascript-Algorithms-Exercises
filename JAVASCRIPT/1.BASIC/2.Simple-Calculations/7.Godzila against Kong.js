function solve(budget, numberOfStatist, priceForClothes) {
    let priceForDecor = budget * 10 / 100;
    let sumForClothes = 0;
    let sumForFilm = 0;
    let discount = 0
    let result = 0;
    if (numberOfStatist > 150) {
        discount = numberOfStatist * priceForClothes * 10 / 100
        sumForClothes = numberOfStatist * priceForClothes;
        sumForClothes - discount
        result = sumForClothes - discount + priceForDecor
    } else {
        sumForClothes = numberOfStatist * priceForClothes
    }
    sumForFilm = priceForDecor + sumForClothes;
    if (sumForFilm > budget) {
        console.log(`Not enought money \n Wingard needs ${budget-sumForFilm.toFixed(2)} leva more .`);
    } else if (sumForFilm < budget) {
        console.log(`Action! \n Wingard start filming with ${budget-result.toFixed(2)} leva left .`)
    }

}
solve(15436.62, 186, 57.99)