function solve(city, salesVolume) {
    let price = 0;
    if (city === 'Sofia') {
        if (salesVolume >= 0 && salesVolume <= 500) {
            price = 0.05;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume >= 500 && salesVolume <= 1000) {
            price = 0.05;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume >= 1000 && salesVolume <= 10000) {
            price = 0.08;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume > 10000) {
            price = 0.12;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        }
    }
    if (city === 'Varna') {
        if (salesVolume >= 0 && salesVolume <= 500) {
            price = 0.045;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume >= 500 && salesVolume <= 1000) {
            price = 0.075;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume >= 1000 && salesVolume <= 10000) {
            price = 0.10;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume > 10000) {
            price = 0.13;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        }
    }
    if (city === 'Plovdiv') {
        if (salesVolume >= 0 && salesVolume <= 500) {
            price = 0.055;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume >= 500 && salesVolume <= 1000) {
            price = 0.08;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume >= 1000 && salesVolume <= 10000) {
            price = 0.012;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        } else if (salesVolume > 10000) {
            price = 0.145;
            salesVolume *= price;
            console.log(Math.floor(salesVolume))
        }
    }
}
solve("Plovdiv", 499.99)