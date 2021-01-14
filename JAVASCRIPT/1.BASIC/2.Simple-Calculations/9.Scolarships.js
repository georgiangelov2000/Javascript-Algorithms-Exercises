function solve(income, averageSuccess, minimumWorkHall) {
    let socialScolarship = 0;
    let excellentScolarship = 0;
    if (income < minimumWorkHall && averageSuccess > 4.50) {
        socialScolarship = minimumWorkHall * 35 / 100;
        console.log(`You get a Social scholarship ${socialScolarship} BGN`)
    } else if (income > minimumWorkHall && averageSuccess < 5.50) {
        console.log('You cannot get a scholarship');
    } else if (income > minimumWorkHall && averageSuccess >= 5.50 && averageSuccess<=6) {
        excellentScolarship = averageSuccess * 25;
        console.log(`You get a scholarship for excellent result ${excellentScolarship} BGN`)
    }else{
        console.log(`your data has an error`)
    }

}
solve(500,6.0,400);