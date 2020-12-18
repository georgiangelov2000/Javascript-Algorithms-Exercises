function solve(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i]) {
            console.log(`${string[i]}/${i} `)
        }
    }
}
solve('abababa');

function secondSolve(str) {
    let array = {};
    for (let index in str) {
        let char = str[index];
        array[char] = (array[char] || []).concat(index);
    }
    Object.entries(array).forEach(([char,keys]) => {
        console.log(`${char} : ${keys.join('/')}`)
    });
}
secondSolve('abababa')