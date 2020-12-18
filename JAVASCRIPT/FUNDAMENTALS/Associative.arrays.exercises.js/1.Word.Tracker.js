function solve(array) {
    let words = array.shift().split(' ');
    let wordsObj = {};
    for (let word of words) {
        wordsObj[word] = 0;
    }
    for (let word of array) {
        if (wordsObj.hasOwnProperty(word)) {
            wordsObj[word]++;
        }
    }
    Object.keys(wordsObj)
        .sort((a, b) => wordsObj[b] - wordsObj[a])
        .forEach((el) => {
            console.log(`${el} - ${wordsObj[el]}`)
        })
}
solve(
    [
        'this sentence', 'In', 'this', 'sentence', 'sentence', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)