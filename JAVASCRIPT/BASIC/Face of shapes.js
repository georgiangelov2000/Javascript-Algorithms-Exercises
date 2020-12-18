function solve(string, number, number2) {
    let area = 0;
    if (string == 'square') {
        area = number * number
    } else if (string == 'circle') {
        area = Math.PI * Math.pow(number, 2)
    } else if (string == 'rectangle') {
        area = number * number2
    } else if (string == 'triangle') {
        let b = number;
        let h = number2;
        area = b * h / 2;
    }
    console.log(area)
}
solve('triangle', 4.5, 20);