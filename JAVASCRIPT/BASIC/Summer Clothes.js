function solve(degrees, typeDay) {
    let outif = '';
    let shoes = '';
    switch (typeDay) {
        case 'Morning':
            if (degrees >= 10 && degrees <= 18) {
                outif += 'Sweatshirt';
                shoes += 'Sneakers'
            } else if (degrees > 18 && degrees <= 25) {
                outif += 'Shirt';
                shoes += 'Moccasins'
            } else if (degrees >= 25) {
                outif += 'T-shirts';
                shoes += 'Sandals'
            }
            break;
        case 'Afternoon':
            if (degrees >= 10 && degrees <= 18) {
                outif += 'Shirt';
                shoes += 'Moccasins'
            } else if (degrees > 18 && degrees <= 25) {
                outif += 'T-shirt';
                shoes += 'Sandals'
            } else if (degrees >= 25) {
                outif += 'Swin Suit';
                shoes += 'Barefoot'
            }
            break;
        case 'Evening':
            if (degrees >= 10 && degrees <= 18) {
                outif += 'Shirt';
                shoes += 'Moccasins'
            } else if (degrees > 18 && degrees <= 25) {
                outif += 'Shirt';
                shoes += 'Moccasins'
            } else if (degrees >= 25) {
                outif += 'Shirt';
                shoes += 'Moccasins'
            }
            break;
        default:
            console.log('error')
            return;

    }
    console.log(`It's  ${degrees} degrees get your ${outif} and ${shoes} . `)
}
solve(22, 'Afternoon')