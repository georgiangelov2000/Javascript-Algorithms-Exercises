function first(words, str) {
    words = words.split(', ');
    for (const word of words) {
        let starsStr = '*'.repeat(word.length);
        str = str.replace(starsStr, word)
    }
    console.log(str)
}
first('great, learning',
    'softuni is ***** place for ******** new programming languages'
    )