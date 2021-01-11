function solve(text, word) {
    let start = text.indexOf(word);
    while (start != -1) {
        let first = text.substring(0, start);
        let second = text.substring(start + word.length);
        text = first + '*'.repeat(word.length) + second;
        start = text.indexOf(word)
    }
    console.log(text)
}
solve('Hello Georgi Nikolov Angelov Nikolov', 'Nikolov')

function myFunction(str, str1) {
    console.log(str.split(str1).join('*'.repeat(str1.length)))
}
myFunction('Hello Georgi Nikolov Angelov Nikolov Nikolov', 'Nikolov')