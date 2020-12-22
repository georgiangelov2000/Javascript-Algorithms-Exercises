function solve(a, b, c) {
    let firstDigit=a%10;
    let secondDigit=b%10;
    let lastDigit=c%10
    if(firstDigit==secondDigit && secondDigit==lastDigit && lastDigit==firstDigit){
        return true
    }else{
        return false;
    }
}
console.log(solve(10,20,30))