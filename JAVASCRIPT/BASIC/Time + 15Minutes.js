function solve(hours, minutes) {
    minutes += 15;
    if (minutes > 59) {
        hours++;
        minutes-=60
    }if(hours>23){
        hours=0;
    }if(minutes<10){
        console.log(`${hours}:0${minutes}`)
    }else{
        console.log(`${hours} ${minutes} `)
    } 
}
solve(0,01)