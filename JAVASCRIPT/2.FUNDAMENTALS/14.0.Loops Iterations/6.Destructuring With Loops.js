function first(arr) {
    for (let el of arr) {
        let inPieces = el.split(' / ');
        let firstPieces = inPieces[0];
        let lastPieces = inPieces[1];
        console.log(firstPieces, lastPieces)
    }
}
first([
    'first / 1',
    'second / 2',
    'third / 3',
    'fourth / 4',
    'fifth / 5',
])