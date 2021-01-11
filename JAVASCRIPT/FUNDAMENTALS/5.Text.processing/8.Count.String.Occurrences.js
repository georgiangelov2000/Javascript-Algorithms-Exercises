function solve(string, word) {
    let matcher = ` ${word} `;
    let index = string.indexOf(matcher);
    let count = 0;
    while (index != -1) {
        count++;
        index = string.indexOf(matcher, index + 1)
    }
    if (string.startsWith(word)) {
        count++
    }
    if (string.endsWith(word)) {
        count++
    }
    console.log(count);
}
solve(
    'is This is George Nikolov Angelov is ', 'is'
);

function secSolve(text, word1) {
    console.log(text.split(' ').filter(element => element == word1).length);
}
solve('az tq tq tq tq', 'tq')