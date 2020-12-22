function solve(a, b) {
    let result = a+b;
    if (result >= 50 && result <= 80) {
        return 65
    } else {
        return 80;
    }
}
console.log(solve(50,70))

//JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80  return 65 other wise return 80.