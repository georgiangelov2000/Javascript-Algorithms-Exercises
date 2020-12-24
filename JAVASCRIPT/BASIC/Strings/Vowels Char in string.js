function solve(string) {
    let counter = '';
    let sum = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            sum += i
            counter += ` ${i}-${string[i]} `
        }
    }
    return `Volew chars:${counter}=>Sum:${sum}`
}
console.log(solve('javascript'))
console.log(solve('python'))