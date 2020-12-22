function solve(daysForStay, typeOfRoom, rating) {
    let price = 0;
    let firstFinalPrice = 0
    let bigPrice = 0
    switch (typeOfRoom) {
        case 'room for one person':

            price = (daysForStay - 1) * 18;
            if (daysForStay < 10) {
                firstFinalPrice = price;
                if (rating === 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.90.toFixed(2)))
                }
            } else if (daysForStay > 10 && daysForStay < 15) {
                firstFinalPrice = price;
                if (rating === 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.90.toFixed(2)))
                }
            } else if (daysForStay > 15) {
                firstFinalPrice = price;
                if (rating == 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.90.toFixed(2)))
                }
            }


            break;
        case 'apartment':

            price = (daysForStay - 1) * 25;
            if (daysForStay < 10) {
                firstFinalPrice = price * 0.70;
                if (rating === 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.90.toFixed(2)))
                }
            } else if (daysForStay > 10 && daysForStay < 15) {
                firstFinalPrice = price * 0.65;
                if (rating === 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.90.toFixed(2)))
                }
            } else if (daysForStay > 15) {
                firstFinalPrice = price * 0.50;
                if (rating == 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.90.toFixed(2)))
                }
            }


            break;
        case 'president apartment':
            
            price = (daysForStay - 1) * 35;
            if (daysForStay < 10) {
                firstFinalPrice = price * 0.10;
                if (rating === 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.90.toFixed(2)))
                }
            } else if (daysForStay > 10 && daysForStay < 15) {
                firstFinalPrice = price * 0.85;
                if (rating === 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.90.toFixed(2)))
                }
            } else if (daysForStay > 15) {
                firstFinalPrice = price * 0.80;
                if (rating == 'positive') {
                    console.log(bigPrice = firstFinalPrice + (firstFinalPrice * 0.25.toFixed(2)))
                } else if (rating === 'negative') {
                    console.log(bigPrice = (firstFinalPrice * 0.90.toFixed(2)))
                }
            }
            break;

        default:
            break;

    }
}
solve(2, 'apartment', 'positive')