function solve(typeOfTheDay, age) {
    let price;
    if (typeOfTheDay === 'Weekday') {
        if (age >= 0 && age <= 18) {
            price = '12$'
        } else if (age >= 18 && age <= 64) {
            price = '18$'
        } else if (age >= 64 && age <= 122) {
            price = '12$'
        } else {
            price = "Error"
        }
    } else if (typeOfTheDay === 'Weekend') {
        if (age >= 0 && age <= 18) {
            price = '15$'
        } else if (age >= 18 && age <= 64) {
            price = '20$'
        } else if (age >= 64 && age <= 122) {
            price = '15$'
        } else {
            price = "Error"
        }
    } else if (typeOfTheDay === 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = '5$'
        } else if (age >= 18 && age <= 64) {
            price = '12$'
        } else if (age >= 64 && age <= 122) {
            price = '10$'
        } else {
            price = "Error"
        }
    }
    console.log(price)
}
solve('Weekday',
    42
)
solve('Holiday',
    -12
)
solve('Holiday',
    15
)