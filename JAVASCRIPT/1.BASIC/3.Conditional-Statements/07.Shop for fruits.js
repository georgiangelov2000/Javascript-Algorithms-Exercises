function solve(fruit, day, aCountOf) {
    let price = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if(fruit=='banana'){
                price=2.50;
                console.log(aCountOf+=price)
            }if(fruit=='apple'){
                price=1.20;
                console.log(aCountOf*=price);
            }if(fruit=='orange'){
                price=0.85;
                console.log(aCountOf*=price)
            }if(fruit=='grapeftuit'){
                price=1.45;
                console.log(aCountOf*=price)
            }if(fruit=='kiwi'){
                price=2.50;
                console.log(aCountOf*=price)
            }if(fruit=='banana'){
                price=2.50;
                console.log(aCountOf*=price)
            }if(fruit=='banana'){
                price=2.50;
                console.log(aCountOf*=price)
            }
            break;

        default:
            break;
    }

}
solve('apple','Tuesday',2)